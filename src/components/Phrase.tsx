import React from "react";
import { usePhrasesStore } from "../stores/Phrases";

const Phrase = () => {
  const fetchPhrases = usePhrasesStore((state) => state.fetchPhrases);
  const phrases = usePhrasesStore((state) => state.phrases);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    fetchPhrases(5)
  };
  return (
    <>
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
                    onChange={(e) => handleChange(e)}
                    placeholder="Type the phrase without making a mistake 👆"
                />
            </label>
        </li>
    </section>
    </>
  );
};

export default Phrase;
