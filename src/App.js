import {useEffect, useState} from "react"
import './App.css';

function App() {
  const[image,setImage]=useState()
 useEffect(()=>{
  async function getDog(){
    try{
      const response = await fetch ("https://dog.ceo/api/breeds/image/random")
      const data = await response.json()
      setImage(data.message)
    }
    catch(error){
    console.log("i am from catch", error)
    }
  }
  setImage(getDog)
 },[])
  return (
    <div className="App">
     <img src={image}   alt="image" height={"300px"} />
    </div>
  );
}

export default App;

