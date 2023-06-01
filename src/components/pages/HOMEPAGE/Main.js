import React,{useState} from 'react'
import style from "./Whotofollow.module.css"
const data=[
     {
        id:1,
        name:'A',
        
     },
     {
        id:2,
        name:'B'
     }

]
function Main() {

     const [card,setCard]=useState(null);
    const handleClick=()=>{}
  return (
    <div className={style.firstcontainer}>
    <div className={style.container}>
        <h2>Who to follow</h2>
        <div className={style.MainContaner} >
        {data.map((item )=>{

            return(

                <div className={style.container3} style={{margin:'5px', border:'2px solid black'}}
                      onMouseEnter={()=>setCard(item.id)}
                      onMouseDownCapture={()=>setCard(null)}
                >
                <img className={style.img1} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&w=1000&q=80" />
                <h4>{item.name  }    
                       <img className={style.icon} src='https://media.istockphoto.com/id/1396933001/vector/vector-blue-verified-badge.jpg?s=612x612&w=0&k=20&c=aBJ2JAzbOfQpv2OCSr0k8kYe0XHutOGBAJuVjvWvPrQ=' /> </h4>
                <button onClick={handleClick} className={style.follow}>Follow</button>
            </div>
            )
        })}
        </div>
        </div>
    </div>
  )
}

export default Main
