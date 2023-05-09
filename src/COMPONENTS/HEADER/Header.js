import React from 'react'
import style from "./Header.module.css";
import {FaArtstation} from "react-icons/fa";
import {AiOutlineMenu} from "react-icons/ai";

// AiOutlineClose



function Header() {


  return (
    <>
<div className={style.App}>
    <p className={style.icon1}><FaArtstation /> Apna store..</p>
     <div  className={style.navbar}>
         <ul className={style.navbarul}>
               <li>Home</li>
                <li>About</li>
                <li>Project</li>
                <li>Vidio</li>
                <li>Contacts</li>
                <button className={style.butt}>Login</button>
            </ul>
            
     </div>
     <div className={style.icon2}>
         <AiOutlineMenu/>
         
</div>
     </div>

    </>
  )
}

export default Header
// {/* <button className={style.butt}>Login</button> */}

    
    // {/* <p className={style.iconn}><FaArtstation /> Apna store..</p> */}
    // {/* <p className={style.menu}><AiOutlineMenu/></p> */}
    
