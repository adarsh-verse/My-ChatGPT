import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import "./Sidebar.css"

function Sidebar() {
  const[extend, setExtend] = useState(false)
  return (
    <div className='sidebar'>
        <GiHamburgerMenu id='ham' onClick={()=>{
          setExtend(prev=>!prev)
        }}/>
        <div className="newChat">
            <FaPlus  />
            {extend?<p>New Chat</p>:null}
        </div>
        <div className="recent">
            <FaRegMessage />
            {extend?<p>who are you</p>:null}
        </div>
    </div>
  )
}

export default Sidebar
