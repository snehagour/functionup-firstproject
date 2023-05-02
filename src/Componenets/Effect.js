import { useEffect,useState }  from 'react'

function Effect() {
    function handle(){
        fetch("https://dog.ceo/api/breeds/image/random  ")
        .then((res)=>res.json())
        .then((data)=>setData(data.message))
    }
    const [data,setData]=useState([])
   useEffect(()=>{
      fetch("https://dog.ceo/api/breeds/image/random")
      .then((res)=>res.json())
        .then((data)=>setData(data.message))
     },[])

  return (
    <div>
      <img src={data} alt="pic" />
      <button onClick={handle}>Click here </button> 
    </div>
  )
}

export default Effect


