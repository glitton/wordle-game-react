import React from "react";

function GuessInput({ handleSubmittedGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmittedGuess(tentativeGuess);
    setTentativeGuess("");
  }
  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        required
        disabled={gameStatus !== "running"}
        id='guess-input'
        type='text'
        minLength={5}
        maxLength={5}
        pattern='[A-Za-z]{5}'
        title='5 letter word'
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
