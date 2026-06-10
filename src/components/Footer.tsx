export default function Footer() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || "11999999999";
  const waLink = `https://wa.me/55${whatsapp}?text=Ol%C3%A1!%20Quero%20fazer%20uma%20reserva%20%F0%9F%8E%89`;

  return (
    <footer id="contato" className="bg-marrom-800 text-creme-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🎀</span>
              <div>
                <p className="font-playfair font-bold text-lg text-creme-100">
                  Leva e Monta Decor
                </p>
                <p className="text-dourado-400 text-xs tracking-wider uppercase">
                  Festa na Mesa
                </p>
              </div>
            </div>
            <p className="text-creme-200/80 text-sm leading-relaxed">
              A sua festa de mesa com design moderno e sem complicação. Mini tables para
              mini weddings, aniversários e mêsversários.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-playfair font-bold text-creme-100 mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-creme-200/80">
              {[
                ["Como Funciona", "#como-funciona"],
                ["Nossos Kits", "#kits"],
                ["Adicionais", "#adicionais"],
                ["Reservar", "/reservar"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="hover:text-dourado-400 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair font-bold text-creme-100 mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-creme-200/80">
              <p className="flex items-center gap-2">
                <span>📱</span>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-dourado-400 transition-colors"
                >
                  WhatsApp
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span>📸</span>
                <a
                  href="https://www.instagram.com/levaemontadecor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-dourado-400 transition-colors"
                >
                  @levaemontadecor
                </a>
              </p>
              <div className="mt-4 bg-marrom-700 rounded-xl p-4">
                <p className="text-xs text-dourado-400 font-bold uppercase tracking-wide mb-1">
                  Chave PIX
                </p>
                <p className="text-creme-100 font-mono text-sm break-all">
                  @Millabarros2411@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-marrom-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-creme-200/50">
          <p>© {new Date().getFullYear()} Leva e Monta Decor. Todos os direitos reservados.</p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-bold text-sm transition-colors"
          >
            <span>💬</span> Falar no WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
