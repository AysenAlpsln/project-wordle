import React from 'react';

function Result({answer, guessResult}) {
  return (
    <div className={`${guessResult.class} banner`}>
      {guessResult.class === 'happy'
        ? <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guessResult.count} guesses</strong>.
          </p>
        : <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      }
      
    </div>
  );
}

export default Result;
