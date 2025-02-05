import React, { useEffect } from "react";
import { usePhrasesStore } from "../stores/Phrases";
import JSConfetti from "js-confetti";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TimerGame from "./TimerGame";

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

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    interface TypedLetter {
      letter: string;
      correct: boolean;
    }

    const newTypedLetters: TypedLetter[] = inputValue.split("").map((letter: string, index: number): TypedLetter => ({
      letter,
      correct: letter === phrases[0]?.texto[index],
    }));

    usePhrasesStore.setState({ typedLetters: newTypedLetters });

    const allCorrect = newTypedLetters.every((letterObj) => letterObj.correct);

    if (allCorrect) {
      setTextColor("#ffff");

      const jsConfetti = new JSConfetti();

      if (inputValue.length === phrases[0]?.texto.length) {
        jsConfetti.addConfetti();
        setTimeout(() => {
          fetchPhrases(1);
          e.target.value = "";
          usePhrasesStore.setState({ typedLetters: [] });
          handlePhraseComplete(); 
        }, 1000);
      }
    } else {
      setTextColor("");
    }
  };

  const handlePhraseComplete = () => {
    // Logic to increase time
  };

  return (
    <>
      <TimerGame completedWords={undefined} onPhraseComplete={handlePhraseComplete} />
      <div>
        <p className="contentAutor">
          <span className="title-autor">Autor phrase: </span>
          {phrases.length > 0 &&
            phrases[0]?.autor.split("").map((letter, index) => (
              <span className="author" key={index}>
                {letter}
              </span>
            ))}
        </p>
        <p
          className="instructions select-none"
          style={{ color: phrase.textColor }}
        >
          {phrases.length > 0 &&
            phrases[0]?.texto.split("").map((letter, index) => (
              <span
                key={index}
                style={{
                  color: typedLetters[index]?.correct ? "white" : "#f3ec78",
                }}
              >
                {letter}
              </span>
            ))}
        </p>
        <section>
          <li className="link-input">
            <label htmlFor="Write phrase">
              <h2 className="title-game">Write Phrase</h2>
              <TextareaAutosize
                name="write-phrase"
                placeholder="Type the phrase without making a mistake 👆"
                variant="outline"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md text-center"
              />
            </label>
          </li>
        </section>
      </div>
    </>
  );
};

export default Phrase;