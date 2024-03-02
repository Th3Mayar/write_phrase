import React from "react";
import { textos } from "../../api/data";
import { useState } from "react";
import "../../index.css";

const Input = () => {
  const [text, setText] = useState("Hola");

  console.log(textos[0])
  
  const validatePhrase = (phrase) => {
    if (phrase === textos[0].text) {
      alert("Correcto");
    } else {
      alert("Incorrecto");
    }
  };

  function handleChange(event) {
    console.log(event.target.value);
    setText(event.target.value);
  }

  return (
    <div>
      <li className="link-input">
        <label htmlFor="Whrite phrase">
          <h2>Whrite Phrase</h2>
          <input
            type="text"
            onChange={(e) => validatePhrase(e.target.value)}
            placeholder="Digite sin equivocarse la frase que le aparezca 👆"
          />
        </label>
      </li>
    </div>
  );
};

export default Input;
