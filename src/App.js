import {useEffect, useState} from "react"
import axios from "axios";
import './App.css';

function App() {
  const[image,setImage]=useState( )


  
 useEffect(()=>{
  
  axios.get("https://dog.ceo/api/breeds/image/random")
  .then((response)=>setImage(response.data.message))
  
 },[])
  
 

  return (
    <div className="App">
     <img src={image}  alt="image" height={"300px"} />
    </div>
  );
}

export default App;

