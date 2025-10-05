import React, { useContext, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import "./Sidebar.css"
import { dataContext } from '../../Context/UserContext';

function Sidebar() {
  const{sent, prevPrompt, newChat, extend, setExtend} = useContext(dataContext)
  async function loadPrevPrompt(prompt){
    let removeItem = null;
    prevPrompt.map((item, index) => {
      Array(item).forEach(element => {
        if(element[1] === prompt) {
          removeItem = element;
        }
      })
    })
    if(removeItem) {
      let index = prevPrompt.indexOf(removeItem);
      prevPrompt.splice(index, 1);
    }
    sent(prompt)
  }

  return (
    <div className='sidebar'>
        <GiHamburgerMenu id='ham' onClick={()=>{
          setExtend(prev=>!prev)
        }}/>
        <div className="newChat" onClick={()=>{
          newChat()
        }}>
            <FaPlus  />
            {extend?<p>New Chat</p>:null} 
        </div>
        {prevPrompt.map((item, index)=>{
          return(
          <div className="recent" onClick={()=>{
            Array(item).forEach(element => {
              loadPrevPrompt(element[1]);
            });
          }}>
            <FaRegMessage />
            {extend?<p>{item[1].slice(0,10)+"..."}</p>:null}
        </div> )
        })}
        
    </div>
  )
}

export default Sidebar
