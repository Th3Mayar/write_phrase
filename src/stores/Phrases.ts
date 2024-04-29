import { create } from "zustand";
import type { Tema } from "../types/types";
import { questionPlay } from "../../api/data";

interface PhrasesState {
  texto: string | TrustedHTML;
  phrases: Tema[];
  currentPhrase: number;
  textColor: string;
  typedLetters: { letter: string; correct: boolean }[];
  fetchPhrases: (limit: number) => Promise<void>;
  setTextColor: (color: string) => void;
  setPhrase: (phrase: string) => void;
}

export const usePhrasesStore = create<PhrasesState>((set) => {
  return {
    texto: "",
    phrases: [],
    currentPhrase: 0,
    textColor: "white",
    typedLetters: [],
    setPhrase: (phrase: string) => {
      set({ texto: phrase });
    },

    fetchPhrases: async (limit: number) => {
      try {
        const randomIndex = Math.floor(Math.random() * questionPlay.length);
        const randomPhrase = questionPlay[randomIndex];
        set({ phrases: [randomPhrase] });
      } catch (error) {
        console.error("Error fetching phrases:", error);
      }
    },

    setTextColor: (color: string) => {
      set({ textColor: color });
    },
  };
});