import React from 'react';
import GuessInput from '../GuessInput';
import Guesses from '../Guesses';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessInput, setGuessInput] = React.useState('');
  const [guessList, setGuessList] = React.useState([]);

  
  return (
    <>
      <Guesses 
        guessList = {guessList}
      />
      <GuessInput 
        guessInput = {guessInput}
        setGuessInput = {setGuessInput}
        guessList = {guessList}
        setGuessList = {setGuessList}
      />
    </>
  );
}

export default Game;
