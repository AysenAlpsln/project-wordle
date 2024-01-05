import React from 'react';

function Guesses({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((word, index) => (
        <p
          key={index}
          className="guess"
        >
          {word}
        </p>
      ))}
    </div>
  );
}

export default Guesses;
