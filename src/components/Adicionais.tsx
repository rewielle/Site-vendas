import { ADICIONAIS } from "@/lib/kits";

export default function Adicionais() {
  return (
    <section id="adicionais" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">Itens Adicionais</h2>
        <p className="section-subtitle">
          Personalize ainda mais a sua mesa com nossos adicionais
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {ADICIONAIS.map((item) => (
            <div
              key={item.id}
              className="bg-creme-50 border border-creme-200 rounded-2xl p-6 text-center hover:border-dourado-300 hover:shadow-md transition-all duration-300 group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {item.emoji}
              </div>
              <p className="text-sm font-semibold text-marrom-800 mb-2">{item.name}</p>
              <p className="font-playfair text-xl font-bold text-dourado-500">
                + R$ {item.price.toFixed(2).replace(".", ",")}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-marrom-600 text-sm mt-8">
          Adicionais podem ser selecionados durante a reserva do kit.
        </p>
      </div>
    </section>
  );
}
