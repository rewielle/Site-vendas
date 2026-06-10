export default function Hero() {
  return (
    <section className="relative min-h-screen gradient-hero flex items-center overflow-hidden pt-16">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-rose-100/60 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-dourado-300/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-creme-200/50 rounded-full blur-3xl" />

      {/* Confetti dots */}
      {[
        { top: "15%", left: "8%", size: 12, color: "#E8C97A", delay: "0s" },
        { top: "25%", right: "12%", size: 8, color: "#ECA0B2", delay: "1s" },
        { top: "70%", left: "5%", size: 10, color: "#D4A853", delay: "2s" },
        { top: "60%", right: "8%", size: 14, color: "#E8C97A", delay: "0.5s" },
        { top: "85%", left: "20%", size: 8, color: "#ECA0B2", delay: "1.5s" },
        { top: "10%", right: "25%", size: 10, color: "#D4A853", delay: "2.5s" },
      ].map((dot, i) => (
        <span
          key={i}
          className="confetti-dot"
          style={{
            top: dot.top,
            left: (dot as { left?: string }).left,
            right: (dot as { right?: string }).right,
            width: dot.size,
            height: dot.size,
            backgroundColor: dot.color,
            animationDelay: dot.delay,
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="text-center md:text-left">
          <p className="text-dourado-500 font-lato font-bold tracking-widest uppercase text-sm mb-4">
            🎀 Festa na Mesa
          </p>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-marrom-800 leading-tight mb-6">
            Sua festa
            <span className="italic text-dourado-500"> dos sonhos</span>
            <br />
            sem complicação
          </h1>
          <p className="text-marrom-600 text-lg md:text-xl mb-8 font-lato leading-relaxed">
            Decorações artísticas e encantadoras para mini weddings,
            aniversários e mêsversários. <strong>Simples, rápido e econômico!</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#kits" className="btn-primary text-center">
              Ver Kits e Preços
            </a>
            <a href="#como-funciona" className="btn-secondary text-center">
              Como Funciona?
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap gap-6 justify-center md:justify-start text-sm text-marrom-600">
            <div className="flex items-center gap-2">
              <span className="text-dourado-500 text-lg">✓</span>
              Fácil de montar
            </div>
            <div className="flex items-center gap-2">
              <span className="text-dourado-500 text-lg">✓</span>
              Econômico
            </div>
            <div className="flex items-center gap-2">
              <span className="text-dourado-500 text-lg">✓</span>
              Design moderno
            </div>
          </div>
        </div>

        {/* Decorative card */}
        <div className="hidden md:flex justify-center">
          <div className="relative">
            <div className="w-80 h-96 bg-white/70 backdrop-blur rounded-3xl shadow-2xl border border-creme-200 flex flex-col items-center justify-center p-8 gap-6">
              <div className="text-7xl">🎂</div>
              <div className="text-center">
                <p className="font-playfair text-2xl font-bold text-marrom-800 mb-1">
                  Mesa dos Sonhos
                </p>
                <p className="text-marrom-600 text-sm">
                  Escolha seu kit, informe o tema e a data
                </p>
              </div>
              <div className="w-full space-y-2">
                {["Kit Festejar — R$75", "Kit Celebrar — R$140", "Kit Alegrar — R$160"].map(
                  (k) => (
                    <div
                      key={k}
                      className="bg-creme-100 rounded-xl px-4 py-2 text-sm text-marrom-700 font-medium flex items-center gap-2"
                    >
                      <span className="text-dourado-500">✦</span> {k}
                    </div>
                  )
                )}
              </div>
              <span className="text-xs text-marrom-600/70 italic">
                50% na reserva • Retire e Monte • Devolva
              </span>
            </div>
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-rose-300 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
              🎈 Balões inclusos
            </div>
            <div className="absolute -bottom-4 -left-4 bg-dourado-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
              📦 Leve e Monte
            </div>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80L60 69.3C120 58.7 240 37.3 360 32C480 26.7 600 37.3 720 42.7C840 48 960 48 1080 42.7C1200 37.3 1320 26.7 1380 21.3L1440 16V80H0Z"
            fill="#FAF3E7"
          />
        </svg>
      </div>
    </section>
  );
}
