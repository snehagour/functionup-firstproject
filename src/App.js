import {useState } from 'react';
import { NewObjcets } from './arry'
function App() {
let api = "https://reqres.in/api/users/"

let [array,setArr] = useState([])
async function handlegetUser(){
  
    
    const response = await fetch(api).then((res)=>res);
    const arr = await response.json();
    setArr(arr.data)
}
  return (
    <div >
  {array.map((el,index) => {
    return <NewObjcets
    indexs={el}
    key={array.id}
    />
  })}
  <button onClick={handlegetUser}>get user</button>
     
    </div>
  );
}

export default App;
