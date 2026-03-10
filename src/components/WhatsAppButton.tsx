"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
    className?: string;
    variant?: "fixed" | "inline";
}

export default function WhatsAppButton({ className, variant = "fixed" }: WhatsAppButtonProps) {
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        try {
            // Captura de dados simplificada (audit)
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
            const message = encodeURIComponent("Vim da apresentação e quero uma sessão estratégica.");
            window.location.href = `https://wa.me/SEUNUMERO?text=${message}`;
        }
    };

    return (
        <button
            onClick={handleClick}
            disabled={loading}
            className={cn(
                "group relative flex items-center justify-center gap-2 rounded-full font-heading font-extrabold uppercase transition-all duration-300",
                variant === "fixed"
                    ? "fixed bottom-8 right-8 z-50 px-6 py-4 bg-neon text-background hover:scale-110 hover:shadow-neon-strong"
                    : "px-8 py-5 bg-neon text-background hover:scale-105 hover:shadow-neon",
                className
            )}
        >
            <MessageCircle className="w-6 h-6 fill-current" />
            <span>{loading ? "Processando..." : "Quero Receita Previsível"}</span>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-xl bg-neon/30 transition-opacity -z-10" />
        </button>
    );
}
