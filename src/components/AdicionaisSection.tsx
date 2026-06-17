"use client";

import Image from "next/image";
import { ADICIONAIS } from "@/lib/data";
import { useCart } from "@/lib/CartContext";

export default function AdicionaisSection() {
  const { addAdicional } = useCart();

  return (
    <section className="px-5 py-10">
      <div className="text-center mb-6">
        <h2 className="font-playfair text-2xl font-bold text-marrom-800 mb-2">
          Adicionais
        </h2>
        <div className="gold-line w-12 mx-auto mb-3" />
        <p className="text-marrom-600 text-sm">
          Complemente a decoração do seu evento
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 max-w-md mx-auto mb-4">
        {ADICIONAIS.map((item) => (
          <div key={item.id} className="card text-center">
            <div className="relative aspect-square bg-creme-100">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="120px"
              />
            </div>
            <div className="p-3">
              <p className="text-xs font-semibold text-marrom-800 mb-1 leading-tight">
                {item.name}
              </p>
              <p className="font-playfair text-sm font-bold text-dourado-500 mb-2">
                R$ {item.price.toFixed(2).replace(".", ",")}
              </p>
              <button
                onClick={() => addAdicional(item)}
                className="w-full py-2 rounded-full text-xs font-bold btn-outline-gold"
              >
                Adicionar
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-marrom-600 text-xs italic">
        Também alugamos outros itens. Consulte disponibilidade.
      </p>
    </section>
  );
}
