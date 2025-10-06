import React, { useContext, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";


// import { BsTrash } from "react-icons/bs";
import "./Sidebar.css"
import { dataContext } from '../../Context/UserContext';

function Sidebar() {
  const {
    prevPrompt,
    setPrevPrompt,
    newChat,
    extend,
    setExtend,
    setRecentPrompt,
    setResponse,
    setShowResult
  } = useContext(dataContext);

  function loadPrevPrompt(item) {
    setRecentPrompt(item.prompt)
    setResponse(item.response)
    setShowResult(true)
  }

  const deleteChat = (id) => {
    const updated = prevPrompt.filter(chat => chat.id !== id)
    setPrevPrompt(updated)
    localStorage.setItem('chatHistory', JSON.stringify(updated));
    setRecentPrompt("")
    setResponse("")
    setShowResult(false)

  }
  return (
    <div className='sidebar'>
      <GiHamburgerMenu id='ham' onClick={() => {
        setExtend(prev => !prev)
      }} />
      <div className="newChat" onClick={() => {
        newChat()
      }}>
        <FaPlus />
        {extend ? <p>New Chat</p> : null}
      </div>
   <div className="chats-container">
      {prevPrompt.map((item) => (
        <div
          key={item.id}
          className='recent'
          onClick={() => loadPrevPrompt(item)}
        >
          <FaRegMessage />
          {extend ? <p>{item['prompt'].slice(0, 10) + "..."}</p> : null}
          <button className='dlt-btn' onClick={(e) => {
            e.stopPropagation()
            deleteChat(item.id);
          }}>
            <FaTrash  />
          </button>
        </div>

      ))}
    </div>
    </div>
  );
}



export default Sidebar
