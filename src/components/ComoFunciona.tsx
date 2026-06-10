const steps = [
  {
    num: "01",
    emoji: "📋",
    title: "Reserve o Kit",
    desc: "Escolha seu kit, informe o tema desejado e a data da comemoração. Pague 50% para confirmar a reserva.",
  },
  {
    num: "02",
    emoji: "📦",
    title: "Faça a Retirada",
    desc: "No dia combinado, retire todos os itens do kit no local indicado.",
  },
  {
    num: "03",
    emoji: "🎉",
    title: "Monte e Curta",
    desc: "Com tudo em mãos, é só montar sua mesa e curtir a festa! Simples e rápido.",
  },
  {
    num: "04",
    emoji: "🔄",
    title: "Devolução",
    desc: "No dia e horário combinado, devolva todas as peças limpas e em bom estado.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">Como Funciona?</h2>
        <p className="section-subtitle">
          Em apenas 4 passos simples você terá uma festa de mesa linda e encantadora
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative flex flex-col items-center text-center group">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full border-t-2 border-dashed border-creme-300 z-0" />
              )}

              {/* Icon circle */}
              <div className="relative z-10 w-20 h-20 bg-creme-100 border-2 border-dourado-300 rounded-full flex items-center justify-center text-3xl mb-4 group-hover:bg-dourado-300 group-hover:border-dourado-500 transition-all duration-300 shadow-md">
                {step.emoji}
              </div>

              <span className="text-dourado-400 font-bold text-xs tracking-widest mb-2 uppercase">
                Passo {step.num}
              </span>
              <h3 className="font-playfair text-xl font-bold text-marrom-800 mb-2">
                {step.title}
              </h3>
              <p className="text-marrom-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Highlight box */}
        <div className="mt-16 bg-creme-100 border border-dourado-300 rounded-2xl p-6 md:p-8 text-center">
          <p className="font-playfair text-xl text-marrom-800 mb-2">
            💛 Simples, rápido e econômico!
          </p>
          <p className="text-marrom-600">
            Você cuida da memória, a gente cuida da decoração.
          </p>
        </div>
      </div>
    </section>
  );
}
