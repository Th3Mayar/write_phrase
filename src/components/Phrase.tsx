import React from "react";
import "../../api/data.json";
import Input from "./Input";
import "../../index.css";
import { usePhrasesStore } from "../stores/Phrases";

const Phrase = () => {
    const phrases = usePhrasesStore((state) => state.phrases);
   
  return (
    <p className="instructions">
      <span></span>
    </p>
  );
};

export default Phrase;
