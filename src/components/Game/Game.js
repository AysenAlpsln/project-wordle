import React from 'react';
import GuessInput from '../GuessInput';
import Guesses from '../Guesses';
import Result from '../Result';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessInput, setGuessInput] = React.useState('');
  const [guessList, setGuessList] = React.useState([]);
  const [guessResult, setGuessResult] = React.useState({class:'none', count:0});
  
  return (
    <>
      <Guesses 
        answer={answer}
        guessList = {guessList}
      />
      <GuessInput 
        answer={answer}
        guessInput = {guessInput}
        setGuessInput = {setGuessInput}
        guessList = {guessList}
        setGuessList = {setGuessList}
        setGuessResult = {setGuessResult}
      />
      <Result 
        answer={answer}
        guessResult = {guessResult}
      />
    </>
  );
}

export default Game;
