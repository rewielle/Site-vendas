import Link from "next/link";

export default function FalhaPage() {
  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-creme-200 p-10 text-center">
        <div className="text-6xl mb-6">😕</div>
        <h1 className="font-playfair text-3xl font-bold text-marrom-800 mb-3">
          Pagamento não concluído
        </h1>
        <p className="text-marrom-600 mb-6 leading-relaxed">
          Ocorreu um problema com o seu pagamento. Não se preocupe — sua reserva
          não foi confirmada e nenhum valor foi cobrado.
        </p>
        <div className="flex flex-col gap-3">
          <Link href="/reservar" className="btn-primary text-center">
            Tentar Novamente
          </Link>
          <a
            href={`https://wa.me/55${process.env.NEXT_PUBLIC_WHATSAPP || "11999999999"}?text=Ol%C3%A1!%20Tive%20um%20problema%20no%20pagamento%20e%20preciso%20de%20ajuda.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-center"
          >
            💬 Falar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
