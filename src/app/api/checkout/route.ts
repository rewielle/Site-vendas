import { NextRequest, NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";
import { KITS, ADICIONAIS } from "@/lib/kits";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN || "TEST-000",
});

export async function POST(req: NextRequest) {
  try {
    const { kit: kitId, adicionais, form, total, reserva } = await req.json();

    const kit = KITS.find((k) => k.id === kitId);
    if (!kit) {
      return NextResponse.json({ error: "Kit inválido" }, { status: 400 });
    }

    const selectedAdicionais = ADICIONAIS.filter((a) => adicionais?.includes(a.id));

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const externalRef = `LEVA-${Date.now()}-${kitId}`;

    const description = [
      `Reserva ${kit.name}`,
      ...selectedAdicionais.map((a) => `+ ${a.name}`),
      `| Tema: ${form.tema || "a combinar"}`,
      `| Data: ${form.dataEvento || "a combinar"}`,
    ].join(" ");

    const preference = new Preference(client);
    const response = await preference.create({
      body: {
        items: [
          {
            id: `reserva-${kitId}`,
            title: description.slice(0, 256),
            description: `50% de entrada para reserva. Restante pago na retirada.`,
            quantity: 1,
            unit_price: reserva,
            currency_id: "BRL",
          },
        ],
        payer: {
          name: form.nome,
          email: form.email,
          phone: {
            area_code: form.telefone?.replace(/\D/g, "").slice(0, 2),
            number: form.telefone?.replace(/\D/g, "").slice(2),
          },
        },
        back_urls: {
          success: `${baseUrl}/sucesso`,
          failure: `${baseUrl}/falha`,
          pending: `${baseUrl}/pendente`,
        },
        auto_return: "approved",
        statement_descriptor: "Leva e Monta Decor",
        external_reference: externalRef,
        metadata: {
          kit: kitId,
          adicionais,
          tema: form.tema,
          dataEvento: form.dataEvento,
          telefone: form.telefone,
          observacoes: form.observacoes,
          total,
          reserva,
        },
      },
    });

    return NextResponse.json({ init_point: response.init_point });
  } catch (err) {
    console.error("Checkout error:", err);
    return NextResponse.json(
      { error: "Erro ao criar preferência de pagamento. Tente novamente." },
      { status: 500 }
    );
  }
}
