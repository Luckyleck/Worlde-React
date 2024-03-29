import { useState } from "react"


function useWordle(solution) {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([...Array(6)]) // each guess is an array
    const [history, setHistory] = useState([]) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)
    const [usedKeys, setUsedKeys] = useState({}) // {a: 'green', b: 'yellow'}

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

    function addNewGuess(formattedGuess) {

        if (currentGuess === solution) {
            setIsCorrect(true)
        }

        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = formattedGuess
            return newGuesses
        })

        setHistory((prevHistory) => {
            return [ ...prevHistory, currentGuess]
        })

        setTurn((prevTurn) => {
            return prevTurn += 1
        })

        setUsedKeys((prevUsedKeys) => {
            let newKeys = {...prevUsedKeys}
            
            formattedGuess.forEach((letterObj) => {
                const currentColor = newKeys[letterObj.letter]

                if (letterObj.color === 'green') {
                    newKeys[letterObj.letter] = 'green'
                    return
                }
                if (letterObj.color === 'yellow' && currentColor !== 'green') {
                    newKeys[letterObj.letter] = 'yellow'
                    return
                }
                if (letterObj.color === 'grey' && currentColor !== 'green' && currentColor !== 'yellow') {
                    newKeys[letterObj.letter] = 'grey'
                    return
                }
            })
            return newKeys
        })

        setCurrentGuess('')
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
            addNewGuess(formatted)
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

    return { turn, currentGuess, guesses, isCorrect, handleKeyup, usedKeys }
}

export default useWordle