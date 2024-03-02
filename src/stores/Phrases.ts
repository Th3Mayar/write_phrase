import { create } from "zustand";
import type { Tema } from "../types/types";

interface PhrasesState {
  texto: string | TrustedHTML;
  phrases: Tema[];
  currentPhrase: number;
  textColor: string; 
  typedLetters: { letter: string; correct: boolean }[]; 
  fetchPhrases: (limit: number) => Promise<void>;
  setTextColor: (color: string) => void; 
}

export const usePhrasesStore = create<PhrasesState>((set, get) => {
  return {
    phrases: [],
    currentPhrase: 0,
    textColor: "white",
    typedLetters: [], 

    fetchPhrases: async (limit: number) => {
      set({
        phrases: [
          {
            id: 1,
            texto: "La tecnología avanza a pasos agigantados, transformando nuestra forma de vivir y trabajar. La inteligencia artificial, en particular, está revolucionando múltiples industrias al ofrecer soluciones innovadoras y eficientes.",
            autor: "John Smith",
            nombre: "Avance Tecnológico",
            textColor: undefined
          },
        ],
      });
    },

    setTextColor: (color: string) => {
      set({ textColor: color });
    },
  };
});
