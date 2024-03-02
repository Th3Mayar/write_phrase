import React from "react";
import "../../api/data.json";
import { useState } from "react";
import "../../index.css";

const Input = () => {
  const [text, setText] = useState([]);

  function handleChange(e) {
    console.log(text);
    console.log(e.target.value);
    setText(e.target.value);
  }

return (
    <section>
        <li className="link-input">
            <label htmlFor="Whrite phrase">
                <h2>Whrite Phrase</h2>
                <input
                    type="text"
                    onChange={e => handleChange(e.target.value)}
                    placeholder="Digite sin equivocarse la frase que le aparezca 👆"
                />
            </label>
        </li>
    </section>
);
};

export default Input;
