import type { Metadata, Viewport } from "next";
import { CartProvider } from "@/lib/CartContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leva & Monta Decor | Decoração para Festas",
  description:
    "Decorações práticas e encantadoras para a sua festa. Kits pegue e monte, festa na caixa e itens para aluguel em Recife, Olinda, Paulista e região.",
  openGraph: {
    title: "Leva & Monta Decor",
    description: "Decorações práticas e encantadoras para a sua festa.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#FAF3E7",
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
