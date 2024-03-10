import React, { useEffect } from "react";
import { usePhrasesStore } from "../stores/Phrases";

const Phrase = () => {
  const fetchPhrases = usePhrasesStore((state) => state.fetchPhrases);
  const phrases = usePhrasesStore((state) => state.phrases);
  const setTextColor = usePhrasesStore((state) => state.setTextColor);
  const typedLetters = usePhrasesStore((state) => state.typedLetters);
  const phrase = usePhrasesStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchPhrases(5);
      } catch (error) {
        console.error("Error fetching phrases:", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e: { target: { value: any; }; }) => {
    const inputValue = e.target.value;
    const newTypedLetters = inputValue.split("").map((letter: string, index: string | number) => ({
      letter,
      correct: letter === phrases[0].texto[index],
    }));

    usePhrasesStore.setState({ typedLetters: newTypedLetters });

    const allCorrect = newTypedLetters.every((letterObj) => letterObj.correct);
    if (allCorrect) {
      setTextColor("#ffff");
    }
  };

  return (
    <div>
      <p className="instructions" style={{ color: phrase.textColor }}>
        {phrases.length > 0 &&
          phrases[0].texto.split("").map((letter, index) => (
            <span
              key={index}
              style={{ color: typedLetters[index]?.correct ? "white" : "#f3ec78" }}
            >
              {letter}
            </span>
          ))}
      </p>
      <section>
        <li className="link-input">
          <label htmlFor="Write phrase">
            <h2>Write Phrase</h2>
            <input
              onChange={handleChange}
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