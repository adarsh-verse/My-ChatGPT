import React, { useEffect, useState } from 'react'
import { TiWeatherSunny } from "react-icons/ti";
import { FaRegMoon } from "react-icons/fa6";

import "./Darkmode.css" 

function Darkmode() {
    const[mode, setMode]=useState("darkmode")
    function toggle(){
        setMode(mode==="darkmode" ? "lightmode":"darkmode")
    }
    useEffect(()=>{
        document.body.className=mode
    }, [mode])

  return (
    <div>
      <button className='darkmodebtn' onClick={()=>{
        toggle()
    }}>{mode==="darkmode"?<TiWeatherSunny />:<FaRegMoon />}</button>
    </div>
  )
}

export default Darkmode
