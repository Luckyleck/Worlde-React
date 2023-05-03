import React from 'react'

export default function Row({ guess, currentGuess }) {

    if (guess) {
        return (
            <div className="row past">
                {guess.map((letter, index) => {
                    return <div key={index} className={letter.color}>{letter.letter}</div>
                })}
            </div>
        )
    }

    if (currentGuess) {
        let letters = [...currentGuess]

        return (
            <div className="row current">
                {letters.map((letter, index) => {
                    return <div key={index} className="filled">{letter}</div>
                })}
                {[...Array(5 - letters.length)].map((_, index) => {
                    return <div key={index}/>
                })}
            </div>
        )
    }
    return (
        <div className="row">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
