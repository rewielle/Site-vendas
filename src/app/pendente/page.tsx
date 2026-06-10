import Link from "next/link";

export default function PendentePage() {
  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-creme-200 p-10 text-center">
        <div className="text-6xl mb-6">⏳</div>
        <h1 className="font-playfair text-3xl font-bold text-marrom-800 mb-3">
          Pagamento Pendente
        </h1>
        <p className="text-marrom-600 mb-6 leading-relaxed">
          Seu pagamento está sendo processado. Isso pode levar alguns minutos.
          Assim que for confirmado, você receberá um e-mail e entraremos em
          contato pelo WhatsApp.
        </p>
        <div className="bg-dourado-300/20 border border-dourado-300 rounded-2xl p-4 text-sm text-marrom-700 mb-6">
          <p>
            ⚡ Se pagou via PIX, a confirmação costuma ser imediata. Verifique seu
            banco e aguarde alguns minutos.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <a
            href={`https://wa.me/55${process.env.NEXT_PUBLIC_WHATSAPP || "11999999999"}?text=Ol%C3%A1!%20Fiz%20o%20pagamento%20e%20estou%20aguardando%20confirma%C3%A7%C3%A3o%20da%20minha%20reserva.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center"
          >
            💬 Falar no WhatsApp
          </a>
          <Link href="/" className="btn-secondary text-center">
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}
