import React from 'react';

function GuessInput({guessInput, setGuessInput, guessList, setGuessList}) {

  function submitGuess(event) {
    event.preventDefault();
    //console.log({ guess: guessInput })
    if(guessList.length <= 5) {
      setGuessList([...guessList, guessInput])
    } else {
      window.alert('maximum guess')
    }
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
