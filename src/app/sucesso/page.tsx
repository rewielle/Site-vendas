import Link from "next/link";

export default function SucessoPage() {
  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-creme-200 p-10 text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="font-playfair text-3xl font-bold text-marrom-800 mb-3">
          Reserva Confirmada!
        </h1>
        <p className="text-marrom-600 mb-6 leading-relaxed">
          Seu pagamento foi aprovado e sua reserva está confirmada. Entraremos em
          contato pelo WhatsApp para combinar os detalhes da retirada.
        </p>
        <div className="bg-creme-100 rounded-2xl p-4 text-sm text-marrom-700 mb-6 text-left space-y-2">
          <p className="flex items-start gap-2">
            <span className="text-dourado-500 mt-0.5">✓</span>
            Você receberá uma confirmação por e-mail
          </p>
          <p className="flex items-start gap-2">
            <span className="text-dourado-500 mt-0.5">✓</span>
            Entraremos em contato pelo WhatsApp para confirmar data e local de retirada
          </p>
          <p className="flex items-start gap-2">
            <span className="text-dourado-500 mt-0.5">✓</span>
            O saldo restante (50%) é pago na retirada
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <a
            href={`https://wa.me/55${process.env.NEXT_PUBLIC_WHATSAPP || "11999999999"}?text=Ol%C3%A1!%20Acabei%20de%20fazer%20minha%20reserva%20%F0%9F%8E%89`}
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
