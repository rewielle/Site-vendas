"use client";

import Image from "next/image";
import { KITS } from "@/lib/data";
import { useCart } from "@/lib/CartContext";

export default function KitsSection() {
  const { addKit, items } = useCart();

  return (
    <section id="kits" className="px-5 py-10">
      <div className="text-center mb-8">
        <h2 className="font-playfair text-2xl font-bold text-marrom-800 mb-2">
          Kits disponíveis
        </h2>
        <div className="gold-line w-12 mx-auto mb-3" />
        <p className="text-marrom-600 text-sm">
          Todos incluem painel com balões e peças decorativas
        </p>
      </div>

      <div className="flex flex-col gap-5 max-w-md mx-auto">
        {KITS.map((kit) => {
          const inCart = items.some((i) => i.id === kit.id);
          return (
            <div key={kit.id} className="card">
              <div className="relative aspect-[4/3] bg-creme-100">
                <Image
                  src={kit.image}
                  alt={kit.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-playfair text-lg font-bold text-marrom-800">
                    {kit.name}
                  </h3>
                  <span className="font-playfair text-lg font-bold text-dourado-500 whitespace-nowrap ml-3">
                    R$ {kit.price.toFixed(2).replace(".", ",")}
                  </span>
                </div>
                <p className="text-marrom-600 text-sm mb-4 italic">
                  {kit.description}
                </p>
                <div className="mb-4">
                  <p className="text-xs font-bold text-marrom-700 uppercase tracking-wider mb-2">
                    Itens inclusos:
                  </p>
                  <ul className="grid grid-cols-2 gap-x-3 gap-y-1">
                    {kit.items.map((item) => (
                      <li
                        key={item}
                        className="text-xs text-marrom-600 flex items-start gap-1.5"
                      >
                        <span className="text-dourado-400 mt-0.5 shrink-0">
                          &#x2022;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => addKit(kit)}
                  disabled={inCart}
                  className={`w-full py-3 rounded-full text-sm font-bold transition-all ${
                    inCart
                      ? "bg-creme-200 text-marrom-600 cursor-default"
                      : "btn-gold"
                  }`}
                >
                  {inCart ? "Adicionado ao carrinho" : "Adicionar ao carrinho"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
