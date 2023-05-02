import { useEffect,useState }  from 'react'

function Effect() {
    function handle(){
        setData("https://thumbs.dreamstime.com/b/green-grass-lawn-garden-random-pattern-grey-concrete-stepping-stone-flowering-plant-shurb-trees-backyard-under-161417320.jpg ")
    }
    const [data,setData]=useState([])
    useEffect(()=>{
        setData("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3d64jOrq3NEJTsH9utqEIbOfH70HOYH_v_9sfXPTwg8zIdPrY_opH2fdy4VKo_N_5k-s&usqp=CAU ")
    },[])

  return (
    <div>
      <img src={data} alt="pic" />
      <button onClick={handle}>Click here </button> 
    </div>
  )
}

export default Effect


