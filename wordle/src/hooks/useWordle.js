import { useState } from "react"


function useWordle(solution) {
    const [turn, setTurn] = useState('')
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) // each guess is an array
    const [history, setHistory] = useState([]) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)

    function formatGuess(guess) {

        let solutionArray = [...solution] // turning string into array of individual letters
        let formattedGuess = [...currentGuess].map((char) => {
            return {letter: char, color: 'grey'}
        })

        //find greens
        formattedGuess.forEach((letterObj, i) => {
            if (solutionArray[i] === letterObj.letter) {
                formattedGuess[i].color= 'green'
                solutionArray[i] = null
            }
        })

        //find yellows
        formattedGuess.forEach((letterObj, i) => {
            if (solutionArray.includes(letterObj.letter) && letterObj.color !== 'green') {
                formattedGuess[i].color = 'yellow'
                solutionArray[solutionArray.indexOf(letterObj.letter)] = null
            }
        })

        return formattedGuess
    }

    function addNewGuess(guess) {

    }

    function handleKeyup({ key }) {
        if (key === 'Enter') {

            if (turn > 5) {
                console.log('you used all your guesses')
                return
            }

            if (history.includes(currentGuess)) {
                console.log('you\'ve already tried that word')
                return
            }

            if (currentGuess.length !== 5) {
                console.log('word must be 5 chars long')
                return
            }

            const formatted = formatGuess()
            console.log(formatted)
        }

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