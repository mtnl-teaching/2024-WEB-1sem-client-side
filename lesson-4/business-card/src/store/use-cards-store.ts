import { create } from "zustand";
import { CardType } from "../types/CardType";

export const useCardsStore = create((set) => ({
  cards: [],
  setCards: (cards: CardType[]) => set(() => ({ cards })),
}));
