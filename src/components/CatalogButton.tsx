"use client";

import { CATALOG_URL } from "@/lib/data";

export default function CatalogButton() {
  return (
    <section className="px-5 py-6">
      <a
        href={CATALOG_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-white border border-dourado-300/30 rounded-2xl p-5 text-center shadow-sm active:scale-[0.98] transition-transform"
      >
        <div className="flex items-center justify-center gap-3">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-dourado-500"
          >
            <path
              d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polyline
              points="14 2 14 8 20 8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="16"
              y1="13"
              x2="8"
              y2="13"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="16"
              y1="17"
              x2="8"
              y2="17"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polyline
              points="10 9 9 9 8 9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="text-left">
            <p className="font-playfair text-base font-bold text-marrom-800">
              Ver catálogo completo em PDF
            </p>
            <p className="text-xs text-marrom-600 mt-0.5">
              Todos os kits, temas e detalhes
            </p>
          </div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-dourado-400 ml-auto shrink-0"
          >
            <path
              d="M9 18l6-6-6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </a>
    </section>
  );
}
