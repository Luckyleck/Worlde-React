import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/solutions')
      .then(res => res.json())
      .then(json => {
        // console.log(json)
        const randomSolution = json[Math.floor(Math.random() * json.length)]
        // console.log(randomSolution)
        setSolution(randomSolution.word)
      })
  }, [setSolution])

  return (
    <div className="app">
      <div className="nav">
        <h1>Wordle By Alex</h1>
        <a href="https://github.com/Luckyleck">Github</a>
      </div>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
