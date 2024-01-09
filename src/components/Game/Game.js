import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmittedGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmittedGuess={handleSubmittedGuess} />
    </>
  );
}

export default Game;
