import { useState } from "react"

 function App() {
  const [input, setInput] = useState("")

  function handleClick(value) {

        setInput(input + value);
  }

  function clearInput() {
    setInput("");
  }

  function calculate() {
    try {
      setInput(eval(input).toString())
    } catch {
      setInput("Hi bro Enter something better")
    }
  }

  return (
    <>
 
    <div className="calculator">
      <h2>Elyse Calculator</h2>
      <input type="text" value={input}  />

      <div className="buttons">
           <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
            <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("/")}>/</button>

        <button onClick={() => handleClick("4")}>4</button>
           <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
         <button onClick={() => handleClick("*")}>*</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={clearInput}>C</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => handleClick("+")}>+</button> 
      </div>
    </div>

   </> 
  )
}


export default App