import {useState} from  "react"
import './App.css';


function App() {
  const [first, setfirst] = useState(" ")
  const [headingText, setHeadingText] = useState(" ")

  function handlechange(event){
    setfirst(event.target.value)
  }

  function handleClick(){
    setHeadingText(first)
  }
  return (
    <div className="App">
      <input 
      type="text"
      className="input1"
      placeholder="Add your name..."
      onChange={handlechange}
      value={first}
      />
      <button onClick={handleClick}>Summit</button>
      <h1>Hi my name is {headingText}</h1>
    </div>
  );
}

export default App;
