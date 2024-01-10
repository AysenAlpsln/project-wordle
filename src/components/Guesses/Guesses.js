import React from 'react';
import {range} from '../../utils';
import {checkGuess} from '../../game-helpers';

function Guesses({ answer, guessList }) {
  return (
    <div className="guess-results">
      {range(6).map((num) => (
        <p
          key={num}
          className='guess'
        >
          {guessList[num] 
            ? checkGuess(guessList[num], answer).map((letter,index) => (
              <span key={index} className={`cell ${letter.status}`}>
                {letter.letter}
              </span>
            ))
            : range(5).map((cell) => (
              <span key={cell} className="cell"></span>
            ))
          }
        </p>
      ))}
    </div>
  );
}

export default Guesses;
