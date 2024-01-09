import React from "react";

function GuessInput({ setGuess, guess }) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log({ guess });
    setGuess("");
  }
  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        required
        id='guess-input'
        type='text'
        minLength={5}
        maxLength={5}
        pattern='[A-Za-z]{5}'
        title='5 letter country word'
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
