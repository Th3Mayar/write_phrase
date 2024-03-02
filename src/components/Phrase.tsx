import React, { useEffect } from "react";
import { usePhrasesStore } from "../stores/Phrases";

const Phrase = () => {
  const fetchPhrases = usePhrasesStore((state) => state.fetchPhrases);
  const phrases = usePhrasesStore((state) => state.phrases);
  
  useEffect(() => {
    fetchPhrases(5);
  }, []); 
  
  useEffect(() => {
    window.addEventListener("load", () => {
      console.log("La página ha cargado");
    });
  }, []); 
  
  return (
    <div>
      <p className="instructions">
        {phrases.map((phrase, index) => (
          <p key={index}>{phrase.texto}</p>
        ))}
      </p>
      <section>
        <li className="link-input">
          <label htmlFor="Write phrase">
            <h2>Write Phrase</h2>
            <input
              type="text"
              placeholder="Type the phrase without making a mistake 👆"
            />
          </label>
        </li>
      </section>
    </div>
  );
};

export default Phrase;
