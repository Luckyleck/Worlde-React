import React from 'react'

export default function Row({ guess }) {

    if (guess) {
        return (
            <div className="row past">
                {guess.map((letter, index) => {
                    return <div key={index} className={letter.color
                    }>{letter.letter}</div>
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
