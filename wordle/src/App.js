import { useEffect, useState } from "react";

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
    <div className="App">
      <h1>Wordle By Alex</h1>
      {solution && <div>Solution: {solution}</div>}
    </div>
  );
}

export default App;