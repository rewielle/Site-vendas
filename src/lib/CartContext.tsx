"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Kit, Adicional } from "./data";

export interface CartItem {
  type: "kit" | "adicional";
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  dataFesta: string;
  tema: string;
  bairro: string;
}

interface CartContextValue extends CartState {
  addKit: (kit: Kit) => void;
  addAdicional: (adicional: Adicional) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  setIsOpen: (open: boolean) => void;
  setDataFesta: (v: string) => void;
  setTema: (v: string) => void;
  setBairro: (v: string) => void;
  total: number;
  itemCount: number;
  buildWhatsAppMessage: () => string;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<CartState>({
    items: [],
    isOpen: false,
    dataFesta: "",
    tema: "",
    bairro: "",
  });

  const addKit = useCallback((kit: Kit) => {
    setState((prev) => {
      const existing = prev.items.find((i) => i.id === kit.id);
      if (existing) return prev;
      return {
        ...prev,
        items: [
          ...prev.items,
          { type: "kit", id: kit.id, name: kit.name, price: kit.price, quantity: 1 },
        ],
        isOpen: true,
      };
    });
  }, []);

  const addAdicional = useCallback((adicional: Adicional) => {
    setState((prev) => {
      const existing = prev.items.find((i) => i.id === adicional.id);
      if (existing) {
        return {
          ...prev,
          items: prev.items.map((i) =>
            i.id === adicional.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
          isOpen: true,
        };
      }
      return {
        ...prev,
        items: [
          ...prev.items,
          {
            type: "adicional",
            id: adicional.id,
            name: adicional.name,
            price: adicional.price,
            quantity: 1,
          },
        ],
        isOpen: true,
      };
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      items: prev.items.filter((i) => i.id !== id),
    }));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    setState((prev) => ({
      ...prev,
      items:
        quantity <= 0
          ? prev.items.filter((i) => i.id !== id)
          : prev.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
    }));
  }, []);

  const setIsOpen = useCallback((open: boolean) => {
    setState((prev) => ({ ...prev, isOpen: open }));
  }, []);

  const setDataFesta = useCallback((dataFesta: string) => {
    setState((prev) => ({ ...prev, dataFesta }));
  }, []);

  const setTema = useCallback((tema: string) => {
    setState((prev) => ({ ...prev, tema }));
  }, []);

  const setBairro = useCallback((bairro: string) => {
    setState((prev) => ({ ...prev, bairro }));
  }, []);

  const total = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);

  const buildWhatsAppMessage = useCallback(() => {
    const lines = ["Olá! Gostaria de fazer um orçamento:", ""];
    state.items.forEach((item) => {
      const subtotal = item.price * item.quantity;
      if (item.quantity > 1) {
        lines.push(
          `• ${item.name} (${item.quantity}x) — R$ ${subtotal.toFixed(2).replace(".", ",")}`
        );
      } else {
        lines.push(`• ${item.name} — R$ ${subtotal.toFixed(2).replace(".", ",")}`);
      }
    });
    lines.push("");
    lines.push(`Total estimado: R$ ${total.toFixed(2).replace(".", ",")}`);
    if (state.dataFesta) lines.push(`Data da festa: ${state.dataFesta}`);
    if (state.tema) lines.push(`Tema desejado: ${state.tema}`);
    if (state.bairro) lines.push(`Bairro/Cidade: ${state.bairro}`);
    return lines.join("\n");
  }, [state.items, state.dataFesta, state.tema, state.bairro, total]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addKit,
        addAdicional,
        removeItem,
        updateQuantity,
        setIsOpen,
        setDataFesta,
        setTema,
        setBairro,
        total,
        itemCount,
        buildWhatsAppMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
