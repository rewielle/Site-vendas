import { KITS } from "@/lib/kits";
import { Check } from "lucide-react";

const cardStyles: Record<string, string> = {
  rose: "border-rose-200 bg-gradient-to-br from-white to-rose-100/40",
  dourado: "border-dourado-300 bg-gradient-to-br from-white to-dourado-300/20 ring-2 ring-dourado-300",
  marrom: "border-creme-300 bg-gradient-to-br from-white to-creme-200/60",
};

const badgeStyles: Record<string, string> = {
  rose: "bg-rose-300 text-white",
  dourado: "bg-dourado-500 text-white",
  marrom: "bg-marrom-700 text-white",
};

const btnStyles: Record<string, string> = {
  rose: "bg-rose-300 hover:bg-rose-400 text-white",
  dourado: "bg-dourado-500 hover:bg-dourado-600 text-white",
  marrom: "bg-marrom-700 hover:bg-marrom-800 text-white",
};

export default function Kits() {
  return (
    <section id="kits" className="py-20 gradient-section">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">Nossos Kits</h2>
        <p className="section-subtitle">
          Escolha o kit ideal para a sua comemoração. Todos incluem decoração temática personalizada!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {KITS.map((kit) => (
            <div
              key={kit.id}
              className={`kit-card relative rounded-3xl border-2 p-8 flex flex-col transition-all duration-300 ${cardStyles[kit.color]}`}
            >
              {/* Badge */}
              {kit.badge && (
                <span
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full shadow ${badgeStyles[kit.color]}`}
                >
                  {kit.badge}
                </span>
              )}

              {/* Header */}
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">{kit.emoji}</div>
                <h3 className="font-playfair text-2xl font-bold text-marrom-800 mb-1">
                  {kit.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-marrom-600">R$</span>
                  <span className="font-playfair text-4xl font-bold text-dourado-500">
                    {kit.price.toFixed(2).replace(".", ",")}
                  </span>
                </div>
                <p className="text-xs text-marrom-600/70 mt-1">
                  Reserva: R$ {(kit.price * 0.5).toFixed(2).replace(".", ",")} (50%)
                </p>
              </div>

              {/* Items */}
              <ul className="flex-1 space-y-2 mb-8">
                {kit.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-marrom-700">
                    <Check size={16} className="text-dourado-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`/reservar?kit=${kit.id}`}
                className={`block text-center font-bold py-3 px-6 rounded-full transition-all duration-300 shadow hover:shadow-lg ${btnStyles[kit.color]}`}
              >
                Reservar Este Kit
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-marrom-600 text-sm mt-8">
          * Tema da decoração a combinar. Sujeito à disponibilidade na data escolhida.
        </p>
      </div>
    </section>
  );
}
