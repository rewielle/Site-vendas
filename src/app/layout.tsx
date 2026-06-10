import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leva e Monta Decor | Festa na Mesa",
  description:
    "Decoração de mesa para festas, mêsversários e mini weddings. Simples, rápido e econômico! Monte sua festa dos sonhos sem complicação.",
  openGraph: {
    title: "Leva e Monta Decor | Festa na Mesa",
    description: "A sua festa de mesa com design moderno e sem complicação.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
