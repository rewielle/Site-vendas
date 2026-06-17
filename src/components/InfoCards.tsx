export default function InfoCards() {
  const infos = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-dourado-500">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      ),
      title: "Reserva",
      text: "Pagamento de 50% para garantir a data",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-dourado-500">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "Área de atendimento",
      text: "Recife, Olinda, Paulista e região",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-dourado-500">
          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <path d="M20 8v6M23 11h-6" />
        </svg>
      ),
      title: "Retirada e devolução",
      text: "Combinadas diretamente no atendimento",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-dourado-500">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Formas de pagamento",
      text: "Confirmadas no atendimento",
    },
  ];

  return (
    <section className="px-5 py-8">
      <div className="text-center mb-6">
        <h2 className="font-playfair text-xl font-bold text-marrom-800 mb-2">
          Informações importantes
        </h2>
        <div className="gold-line w-12 mx-auto" />
      </div>

      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        {infos.map((info) => (
          <div
            key={info.title}
            className="bg-white rounded-xl border border-dourado-300/15 p-4"
          >
            <div className="mb-2">{info.icon}</div>
            <p className="text-xs font-bold text-marrom-800 mb-1">
              {info.title}
            </p>
            <p className="text-xs text-marrom-600 leading-relaxed">
              {info.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
