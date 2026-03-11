"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { MessageCircle } from "lucide-react";
import { trackLeadEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
    className?: string;
    variant?: "fixed" | "inline" | "header";
}

export default function WhatsAppButton({ className, variant = "inline" }: WhatsAppButtonProps) {
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        try {
            // Track Event
            await trackLeadEvent({
                event_type: 'whatsapp_click',
                metadata: {
                    variant,
                    device: /Mobi|Android/i.test(navigator.userAgent) ? "mobile" : "desktop",
                    url: window.location.href
                }
            });

            // Legacy Lead Capture
            const { error } = await supabase.from("leads_capturados").insert([
                {
                    utm_source: new URLSearchParams(window.location.search).get("utm_source") || "direct",
                    device_type: /Mobi|Android/i.test(navigator.userAgent) ? "mobile" : "desktop",
                    page_url: window.location.href,
                },
            ]);
            if (error) console.error("Erro ao salvar lead:", error);
        } catch (err) {
            console.error("Falha na captura:", err);
        } finally {
            const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5512981420453";
            const message = encodeURIComponent("Vim da apresentação e quero uma sessão estratégica.");
            setTimeout(() => {
                window.location.href = `https://wa.me/${whatsappNumber}?text=${message}`;
            }, 500);
        }
    };

    if (variant === "fixed") {
        return (
            <button
                onClick={handleClick}
                disabled={loading}
                className={cn(
                    "fixed bottom-6 right-6 z-[60] p-4 bg-neon text-background rounded-full shadow-neon-strong hover:scale-110 active:scale-95 transition-all duration-300 group",
                    className
                )}
                aria-label="Falar no WhatsApp"
            >
                <div className="absolute inset-0 rounded-full animate-ping bg-neon/20 -z-10 group-hover:hidden" />
                <MessageCircle className="w-7 h-7 fill-current" />
                {loading && <div className="absolute inset-0 bg-background/50 rounded-full flex items-center justify-center"><div className="w-4 h-4 border-2 border-neon border-t-transparent rounded-full animate-spin" /></div>}
            </button>
        );
    }

    if (variant === "header") {
        return (
            <button
                onClick={handleClick}
                disabled={loading}
                className={cn(
                    "relative flex items-center gap-2 px-5 py-2.5 bg-neon/10 border border-neon/30 text-neon rounded-full font-heading text-[10px] font-black uppercase tracking-[0.2em] hover:bg-neon hover:text-background transition-all duration-500",
                    className
                )}
            >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{loading ? "..." : "Agendar Agora"}</span>
            </button>
        );
    }

    return (
        <button
            onClick={handleClick}
            disabled={loading}
            className={cn(
                "group relative overflow-hidden flex items-center justify-center gap-3 px-10 py-5 bg-neon text-background rounded-full font-heading font-black uppercase tracking-widest transition-all duration-500 hover:shadow-neon-strong active:scale-95",
                className
            )}
        >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <MessageCircle className="w-6 h-6 fill-current relative z-10" />
            <span className="relative z-10">{loading ? "Processando..." : "Sessão Estratégica Gratuita"}</span>

            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-2xl bg-neon/40 transition-opacity -z-10" />
        </button>
    );
}
