"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Kits", href: "#kits" },
    { label: "Adicionais", href: "#adicionais" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-creme-50/95 backdrop-blur-sm border-b border-creme-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="text-2xl">🎀</span>
          <div>
            <p className="font-playfair font-bold text-marrom-800 leading-tight text-lg">
              Leva e Monta Decor
            </p>
            <p className="text-dourado-500 text-xs font-lato tracking-wider uppercase">
              Festa na Mesa
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-marrom-700 hover:text-dourado-500 font-lato text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kits"
            className="btn-primary text-sm py-2 px-6"
          >
            Reservar Agora
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-marrom-800 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-creme-50 border-t border-creme-200 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-marrom-700 hover:text-dourado-500 font-lato font-medium text-base py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kits"
            onClick={() => setOpen(false)}
            className="btn-primary text-center text-sm py-3"
          >
            Reservar Agora
          </a>
        </div>
      )}
    </header>
  );
}
