"use client";

import Image from "next/image";
import { WHATSAPP_NUMBER } from "@/lib/data";

export default function Hero() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Olá! Vi o site e gostaria de saber mais sobre os kits de decoração 🎉"
  )}`;

  return (
    <section className="relative px-5 pt-10 pb-8">
      {/* Logo */}
      <div className="text-center mb-8">
        <div className="inline-flex flex-col items-center">
          <div className="w-16 h-16 rounded-full border-2 border-dourado-400 flex items-center justify-center mb-3 bg-white/60 shadow-sm">
            <span className="font-playfair text-dourado-500 text-2xl font-bold leading-none">
              L&M
            </span>
          </div>
          <h1 className="font-playfair text-xl font-semibold text-marrom-800 tracking-wide">
            Leva & Monta Decor
          </h1>
          <div className="gold-line w-16 mt-2" />
        </div>
      </div>

      {/* Hero image */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8">
        <Image
          src="/images/hero-collage.jpg"
          alt="Decorações Leva & Monta Decor"
          width={800}
          height={794}
          className="w-full h-auto"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="font-playfair text-white text-lg font-semibold leading-snug drop-shadow-lg">
            Escolha seu kit e reserve sua data!
          </p>
        </div>
      </div>

      {/* Title & subtitle */}
      <div className="text-center mb-8">
        <h2 className="font-playfair text-2xl font-bold text-marrom-800 leading-tight mb-3">
          Decorações práticas e encantadoras para a sua festa
        </h2>
        <p className="text-marrom-600 text-base leading-relaxed">
          Escolha seu kit, monte sua comemoração e reserve pelo WhatsApp.
        </p>
      </div>

      {/* CTA buttons */}
      <div className="flex flex-col gap-3 max-w-xs mx-auto">
        <a
          href="#kits"
          className="btn-gold text-center py-3.5 px-6 text-base"
        >
          Ver kits
        </a>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp text-center py-3.5 px-6 text-base flex items-center justify-center gap-2"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
