import React from 'react';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants'

function GuessInput({answer, guessInput, setGuessInput, guessList, setGuessList, setGuessResult}) {

  function submitGuess(event) {
    event.preventDefault();
    
    // update guessList
    var updatedList = [...guessList, guessInput]
    console.log(updatedList.length)

    // Checking whether the word is the correct word
    if(guessInput === answer) {
      setGuessList(updatedList)
      setGuessResult({class:'happy', count:updatedList.length})
    } else {
      if(updatedList.length < NUM_OF_GUESSES_ALLOWED) {
        setGuessList(updatedList)
      } else if(updatedList.length === NUM_OF_GUESSES_ALLOWED){
        setGuessList(updatedList)
        setGuessResult({class:'sad', count:updatedList.length})
      } else {
        window.alert('Sorry, you have reached the maximum number of guesses.')
      }
    }

    // cleant the input
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
