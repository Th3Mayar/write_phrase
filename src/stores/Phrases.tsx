import { create } from "zustand";
import type { Tema } from "../types/types.d.ts";

interface PhrasesState {
  phrases: Tema[];
  currentPhrase: number;
  fetchPhrases: (limit: number) => Promise<void>;
}

export const usePhrasesStore = create<PhrasesState>((set) => {
  return {
    phrases: [],
    currentPhrase: 0,
    
    fetchPhrases: async (limit : number) => { 
        console.log("fetching phrases");
    }
  };
});
