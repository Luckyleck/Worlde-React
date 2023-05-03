import React from 'react'

export default function Modal({ isCorrect, turn, solution }) {

    return (
        <div className="modal">
            {isCorrect && (
                <div>
                    <h1>You win!</h1>
                    <p className="solution">{solution}</p>
                    <p>You found the soultion in {turn} {turn === 1 ? 'guess' : 'guesses'}</p>
                    <button>Play Again?</button>
                </div>
            )}
            {!isCorrect && (
                <div>
                    <h1>Oh jeepers, you lost :(</h1>
                    <p className="solution">{solution}</p>
                    <p>Better luck next time!</p>
                    <button>Play Again?</button>
                </div>
            )}
        </div>
    )
}
