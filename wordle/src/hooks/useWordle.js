import { useState } from "react"


function useWordle (solution) {
    const [turn, setTurn] = useState('')
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) // each guess is an array
    const [history, setHistory] = useState([]) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)

    function formatGuess(guess) {
        
    }

    function addNewGuess(guess) {

    }

    function handleKeyup() {

    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
}

export default useWordle