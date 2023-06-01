import React from 'react'
import style from "./card.module.css";


const card=(props)=> {
  return (
    <div className={style.Card1}>
     <img src={props.image} alt="profile" className={style.picture}/>
     <p className={style.button}>{props.button}</p>
     <p className={style.name}>{props.name}</p>
     <p className={style.title}>{props.title}</p>
    </div>
  )
}
export default card;

