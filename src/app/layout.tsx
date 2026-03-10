import type { Metadata } from "next";
import { Montserrat, Urbanist } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    weight: ["700", "800", "900"],
});

const urbanist = Urbanist({
    subsets: ["latin"],
    variable: "--font-urbanist",
    weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
    title: "Engenharia de Receita Previsível | Sessão Estratégica",
    description: "Transforme seu processo de vendas em uma engenharia de receita previsível. Pare de depender do acaso e escale seu negócio de alto ticket.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className="scroll-smooth">
            <body className={`${montserrat.variable} ${urbanist.variable} font-sans antialiased`}>
                {children}
            </body>
        </html>
    );
}
