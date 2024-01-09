import React from 'react';
import {range} from '../../utils';

function Guesses({ guessList }) {
  return (
    <div className="guess-results">
      {range(6).map((num) => (
        <p
          key={num}
          className='guess'
        >
          {guessList[num] 
            ? guessList[num].split('').map((letter,index) => (
              <span key={index} className="cell">{
                letter}
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
