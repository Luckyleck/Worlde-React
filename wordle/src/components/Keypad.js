import React, { useEffect, useState } from 'react'

export default function Keypad({ usedKeys }) {
    const [letters, setLetters] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3001/letters')
            .then(res => res.json())
            .then(json => {
                setLetters(json)
            })
    }, [])
    return (
        <div className="keypad">
            {letters && letters.map((char) => {
                const color = usedKeys[char.key]
                return (
                    <div key={char.key} className={color}>{char.key}</div>
                )
            })}
        </div>
    )
}
