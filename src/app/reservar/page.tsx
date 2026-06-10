"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { KITS, ADICIONAIS, Kit, Adicional } from "@/lib/kits";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, Loader2 } from "lucide-react";

function ReservarForm() {
  const searchParams = useSearchParams();
  const initialKitId = searchParams.get("kit") || "celebrar";

  const [kitId, setKitId] = useState(initialKitId);
  const [adicionais, setAdicionais] = useState<string[]>([]);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    dataEvento: "",
    tema: "",
    observacoes: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const kit = KITS.find((k) => k.id === kitId) as Kit;
  const selectedAdicionais = ADICIONAIS.filter((a) => adicionais.includes(a.id));
  const totalAdicionais = selectedAdicionais.reduce((s, a) => s + a.price, 0);
  const totalKit = kit?.price ?? 0;
  const total = totalKit + totalAdicionais;
  const reserva = total * 0.5;

  function toggleAdicional(id: string) {
    setAdicionais((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.nome || !form.email || !form.telefone || !form.dataEvento || !form.tema) {
      setError("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kit: kitId,
          adicionais,
          form,
          total,
          reserva,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Erro ao processar pagamento");
      }

      window.location.href = data.init_point;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro inesperado");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen gradient-hero pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="font-playfair text-4xl font-bold text-marrom-800 mb-2">
            Fazer Reserva
          </h1>
          <p className="text-marrom-600">
            Escolha seu kit, personalize e pague 50% para confirmar
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Kit + Adicionais */}
          <div className="lg:col-span-2 space-y-6">
            {/* Kit Selection */}
            <div className="bg-white rounded-3xl shadow-sm border border-creme-200 p-6">
              <h2 className="font-playfair text-xl font-bold text-marrom-800 mb-4">
                1. Escolha o Kit
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {KITS.map((k) => (
                  <button
                    type="button"
                    key={k.id}
                    onClick={() => setKitId(k.id)}
                    className={`rounded-2xl border-2 p-4 text-center transition-all ${
                      kitId === k.id
                        ? "border-dourado-500 bg-dourado-300/20 shadow-md"
                        : "border-creme-200 hover:border-dourado-300"
                    }`}
                  >
                    <div className="text-3xl mb-1">{k.emoji}</div>
                    <p className="font-bold text-marrom-800 text-sm">{k.name}</p>
                    <p className="text-dourado-500 font-bold">
                      R$ {k.price.toFixed(2).replace(".", ",")}
                    </p>
                  </button>
                ))}
              </div>
              {kit && (
                <div className="mt-4 bg-creme-50 rounded-xl p-4">
                  <p className="text-sm font-bold text-marrom-800 mb-2">Incluso:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {kit.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-marrom-700">
                        <Check size={14} className="text-dourado-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Adicionais */}
            <div className="bg-white rounded-3xl shadow-sm border border-creme-200 p-6">
              <h2 className="font-playfair text-xl font-bold text-marrom-800 mb-4">
                2. Adicionar Extras (opcional)
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {ADICIONAIS.map((a) => (
                  <button
                    type="button"
                    key={a.id}
                    onClick={() => toggleAdicional(a.id)}
                    className={`rounded-2xl border-2 p-3 flex items-center gap-3 transition-all ${
                      adicionais.includes(a.id)
                        ? "border-dourado-500 bg-dourado-300/20"
                        : "border-creme-200 hover:border-dourado-300"
                    }`}
                  >
                    <span className="text-2xl">{a.emoji}</span>
                    <div className="text-left">
                      <p className="text-xs font-semibold text-marrom-800">{a.name}</p>
                      <p className="text-dourado-500 font-bold text-sm">
                        + R$ {a.price.toFixed(2).replace(".", ",")}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Event Details */}
            <div className="bg-white rounded-3xl shadow-sm border border-creme-200 p-6">
              <h2 className="font-playfair text-xl font-bold text-marrom-800 mb-4">
                3. Dados do Evento
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-marrom-700 mb-1">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    className="w-full border border-creme-200 rounded-xl px-4 py-2 text-marrom-800 focus:outline-none focus:border-dourado-400"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-marrom-700 mb-1">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-creme-200 rounded-xl px-4 py-2 text-marrom-800 focus:outline-none focus:border-dourado-400"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-marrom-700 mb-1">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.telefone}
                    onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                    className="w-full border border-creme-200 rounded-xl px-4 py-2 text-marrom-800 focus:outline-none focus:border-dourado-400"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-marrom-700 mb-1">
                    Data do evento *
                  </label>
                  <input
                    type="date"
                    required
                    value={form.dataEvento}
                    onChange={(e) => setForm({ ...form, dataEvento: e.target.value })}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full border border-creme-200 rounded-xl px-4 py-2 text-marrom-800 focus:outline-none focus:border-dourado-400"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-marrom-700 mb-1">
                    Tema desejado *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.tema}
                    onChange={(e) => setForm({ ...form, tema: e.target.value })}
                    className="w-full border border-creme-200 rounded-xl px-4 py-2 text-marrom-800 focus:outline-none focus:border-dourado-400"
                    placeholder="Ex: Ursinhos, Princesas, Safari, Fazendinha..."
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-marrom-700 mb-1">
                    Observações
                  </label>
                  <textarea
                    value={form.observacoes}
                    onChange={(e) => setForm({ ...form, observacoes: e.target.value })}
                    rows={3}
                    className="w-full border border-creme-200 rounded-xl px-4 py-2 text-marrom-800 focus:outline-none focus:border-dourado-400 resize-none"
                    placeholder="Alguma observação especial para a sua festa?"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-sm border border-creme-200 p-6 sticky top-24">
              <h2 className="font-playfair text-xl font-bold text-marrom-800 mb-4">
                Resumo do Pedido
              </h2>

              <div className="space-y-3 text-sm text-marrom-700">
                <div className="flex justify-between">
                  <span>{kit?.name}</span>
                  <span>R$ {totalKit.toFixed(2).replace(".", ",")}</span>
                </div>
                {selectedAdicionais.map((a) => (
                  <div key={a.id} className="flex justify-between text-marrom-600">
                    <span>{a.name}</span>
                    <span>+ R$ {a.price.toFixed(2).replace(".", ",")}</span>
                  </div>
                ))}
                <div className="border-t border-creme-200 pt-3 flex justify-between font-bold text-marrom-800">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2).replace(".", ",")}</span>
                </div>
              </div>

              <div className="mt-6 bg-dourado-300/20 border border-dourado-300 rounded-2xl p-4 text-center">
                <p className="text-xs text-marrom-600 mb-1">Valor da reserva (50%)</p>
                <p className="font-playfair text-3xl font-bold text-dourado-500">
                  R$ {reserva.toFixed(2).replace(".", ",")}
                </p>
                <p className="text-xs text-marrom-600 mt-1">
                  Restante (R$ {reserva.toFixed(2).replace(".", ",")}) na retirada
                </p>
              </div>

              <div className="mt-4 space-y-2 text-xs text-marrom-600">
                <div className="flex items-center gap-2">
                  <span className="text-dourado-500">✓</span>
                  Pagamento via Mercado Pago
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-dourado-500">✓</span>
                  PIX, cartão de crédito e débito
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-dourado-500">✓</span>
                  Parcelas no crédito
                </div>
              </div>

              {error && (
                <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-6 w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Processando...
                  </>
                ) : (
                  <>💳 Confirmar Reserva e Pagar</>
                )}
              </button>

              <p className="mt-3 text-xs text-center text-marrom-600/60">
                Você será redirecionado ao Mercado Pago para concluir o pagamento com segurança.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function ReservarPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Carregando...</div>}>
        <ReservarForm />
      </Suspense>
      <Footer />
    </>
  );
}
