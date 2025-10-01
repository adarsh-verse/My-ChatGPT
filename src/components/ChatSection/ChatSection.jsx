import React from 'react'
import "./ChatSection.css"
import Darkmode from '../Darkmode/Darkmode'
import { TbSend2 } from "react-icons/tb";

function ChatSection() {
  return (
    <div className="chatsection">
      <div className="topsection">
        <div className="heading">
          <span>HELLO ADARSH,</span>
          <span>I'm Your Own Assistant</span>
          <span>What Can I Help You... ?</span>
        </div>
      </div>
      <div className="bottomsection">
        <input type="text" placeholder='Enter a Prompt' />
        <button id='sendbtn'><TbSend2 /></button>
        <Darkmode/>
      </div>
    </div>
  )
}

export default ChatSection
