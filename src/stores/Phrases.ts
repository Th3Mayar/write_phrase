import { create } from "zustand";
import type { Tema } from "../types/types";

interface PhrasesState {
  phrases: Tema[];
  currentPhrase: number;
  fetchPhrases: (limit: number) => Promise<void>;
}

export const usePhrasesStore = create<PhrasesState>((set, get) => {
  return {
    phrases: [],
    currentPhrase: 0,

    fetchPhrases: async (limit: number) => {
        set({
            phrases: [
                {
                    id: 1,
                    texto:
                        "La tecnología avanza a pasos agigantados, transformando nuestra forma de vivir y trabajar. La inteligencia artificial, en particular, está revolucionando múltiples industrias al ofrecer soluciones innovadoras y eficientes.",
                    autor: "John Smith",
                    nombre: "Avance Tecnológico",
                },
            ],
        });
    },
  };
});
