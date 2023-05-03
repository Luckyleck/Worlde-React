import { useState } from "react"


function useWordle(solution) {
    const [turn, setTurn] = useState('')
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) // each guess is an array
    const [history, setHistory] = useState([]) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)

    function formatGuess(guess) {

    }

    function addNewGuess(guess) {

    }

    function handleKeyup({ key }) {
        if (key === 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
            return
        }
        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev += key
                })
            }
        }
        console.log(key)
    }

    return { turn, currentGuess, guesses, isCorrect, handleKeyup }
}

export default useWordle