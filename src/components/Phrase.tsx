import React, { useEffect } from "react";
import { usePhrasesStore } from "../stores/Phrases";
import JSConfetti from 'js-confetti';
// import TimerGame from "./TimerGame";

const Phrase = () => {
  
  const fetchPhrases = usePhrasesStore((state) => state.fetchPhrases);
  const phrases = usePhrasesStore((state) => state.phrases);
  const setTextColor = usePhrasesStore((state) => state.setTextColor);
  const typedLetters = usePhrasesStore((state) => state.typedLetters);
  const phrase = usePhrasesStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchPhrases(1);
      } catch (error) {
        console.error("Error fetching phrases:", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e: { target: { value: string; }; }) => {
    const inputValue = e.target.value;
    const newTypedLetters = inputValue.split("").map((letter, index) => ({
      letter,
      correct: letter === phrases[0]?.texto[index],
    }));

    usePhrasesStore.setState({ typedLetters: newTypedLetters });

    const allCorrect = newTypedLetters.every((letterObj) => letterObj.correct);

    if (allCorrect) {
      setTextColor("#ffff");

      const jsConfetti = new JSConfetti()

      if (inputValue.length === phrases[0]?.texto.length) {
        jsConfetti.addConfetti()
        setTimeout(() => {
          fetchPhrases(1);
          e.target.value = "";
          usePhrasesStore.setState({ typedLetters: [] });
        }, 3000);

      }
    } else {
      setTextColor("");
    }
  };

  return (
    <>
    {/* <TimerGame /> */}
      <div>
        <p className="instructions select-none" style={{ color: phrase.textColor }}>
          {phrases.length > 0 &&
            phrases[0]?.texto.split("").map((letter, index) => (
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
    </>

  );
};

export default Phrase;