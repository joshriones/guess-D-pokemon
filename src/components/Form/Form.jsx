import "./Form.css";
import TypingAnimation from "../utils/TypingAnimation";
import { useState } from "react";

function Form({
  handleRandom,
  handleHint,
  pokemonInput,
  handlePokemonInput,
  pokemons,
  isCorrect,
  setIsCorrect,
}) {
  const [lives, setLives] = useState(3);

  function handleSubmit() {
    if (lives < 1) {
      alert("NO MORE");
    }
    if (pokemons.name === pokemonInput.toLowerCase()) {
      setIsCorrect(true);
      alert("CORRECT!");
    } else {
      setLives((lives) => lives - 1);
    }
  }

  return (
    <div className="form">
      <div className="monitor-display">
        <div className="monitor-screen">
          <div className="circle-big" />
          <div className="circle-r-contents">
            <div className="circle-smalls ">
              <div className="circle-small cred" />
              <div className="circle-small cyellow" />
              <div className="circle-small cgreen" />
            </div>
            <div className="animated-text">
              <TypingAnimation
                text="Start guessing... "
                typingSpeed={100}
                eraseSpeed={50}
                delay={1500}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="form-actions">
        <div className="actions-divider">
          <div className="action">
            <div className="btns">
              <button
                onClick={handleSubmit}
                title="Submit"
                className="submit"
              ></button>
              <div className="btn-next-hint">
                <button onClick={handleRandom} className="btn--next">
                  Next
                </button>
                <button onClick={handleHint} className="btn--hint">
                  Hint
                </button>
                <button onClick={() => setLives(3)} className="btn--reset">
                  Reset
                </button>
              </div>
            </div>

            <input
              type="text"
              className="input-pokemon"
              placeholder="enter answer"
              value={pokemonInput}
              onChange={handlePokemonInput}
            />
            <div className="lives">
              <h3>
                Lives:
                {Array.from({ length: lives }, (_, index) => (
                  <span key={index} className="life">
                    🖤
                  </span>
                ))}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
