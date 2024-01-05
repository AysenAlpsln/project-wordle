import React from 'react';

function GuessInput() {
  const [guessInput, setGuessInput] = React.useState('');

  function submitGuess(event) {
    event.preventDefault();
    console.log({ guess: guessInput })
    setGuessInput('')
  }

  return (
    <form className="guess-input-wrapper" onSubmit={submitGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        pattern='[a-zA-Z]{5}'
        title='Please enter a 5 letter word!'
        value={guessInput}
        onChange={e => setGuessInput(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
