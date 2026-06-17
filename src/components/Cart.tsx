"use client";

import { useCart } from "@/lib/CartContext";
import { WHATSAPP_NUMBER } from "@/lib/data";

export function CartButton() {
  const { itemCount, setIsOpen } = useCart();

  if (itemCount === 0) return null;

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full btn-gold flex items-center justify-center shadow-xl"
      aria-label="Abrir carrinho"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
      <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-400 text-white text-xs font-bold rounded-full flex items-center justify-center badge-pulse">
        {itemCount}
      </span>
    </button>
  );
}

export function CartPanel() {
  const {
    items,
    isOpen,
    setIsOpen,
    removeItem,
    updateQuantity,
    total,
    dataFesta,
    tema,
    bairro,
    setDataFesta,
    setTema,
    setBairro,
    buildWhatsAppMessage,
  } = useCart();

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    buildWhatsAppMessage()
  )}`;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 cart-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Panel */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl max-h-[85vh] flex flex-col cart-panel ${
          isOpen ? "cart-panel-open" : "cart-panel-closed"
        }`}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 bg-creme-200 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 pb-3 border-b border-creme-200">
          <h3 className="font-playfair text-lg font-bold text-marrom-800">
            Seu orçamento
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-marrom-600 rounded-full hover:bg-creme-100"
            aria-label="Fechar"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="text-center text-marrom-600 text-sm py-8">
              Seu carrinho está vazio
            </p>
          ) : (
            <>
              {/* Items */}
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between bg-creme-50 rounded-xl p-3"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-marrom-800">
                        {item.name}
                      </p>
                      <p className="text-xs text-dourado-500 font-bold">
                        R${" "}
                        {(item.price * item.quantity)
                          .toFixed(2)
                          .replace(".", ",")}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.type === "adicional" && (
                        <div className="flex items-center bg-white rounded-lg border border-creme-200">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-7 h-7 flex items-center justify-center text-marrom-600 text-sm"
                          >
                            −
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-marrom-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-7 h-7 flex items-center justify-center text-marrom-600 text-sm"
                          >
                            +
                          </button>
                        </div>
                      )}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="w-7 h-7 flex items-center justify-center text-rose-400 rounded-lg"
                        aria-label="Remover"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="bg-dourado-300/10 rounded-xl p-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-marrom-700">
                    Total estimado
                  </span>
                  <span className="font-playfair text-xl font-bold text-dourado-500">
                    R$ {total.toFixed(2).replace(".", ",")}
                  </span>
                </div>
              </div>

              {/* Form fields */}
              <div className="space-y-3 mb-6">
                <div>
                  <label className="text-xs font-bold text-marrom-700 uppercase tracking-wider mb-1 block">
                    Data da festa
                  </label>
                  <input
                    type="date"
                    value={dataFesta}
                    onChange={(e) => setDataFesta(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-marrom-700 uppercase tracking-wider mb-1 block">
                    Tema desejado
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Princesas, Safari, Tropical..."
                    value={tema}
                    onChange={(e) => setTema(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-marrom-700 uppercase tracking-wider mb-1 block">
                    Bairro / Cidade
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Boa Viagem, Recife"
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                  />
                </div>
              </div>

              {/* Send button */}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full block text-center py-4 text-base flex items-center justify-center gap-2"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enviar pedido no WhatsApp
              </a>
            </>
          )}
        </div>
      </div>
    </>
  );
}
