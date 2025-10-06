import React, { useContext, useState } from 'react'
import "./ChatSection.css"
import Darkmode from '../Darkmode/Darkmode'
import { TbSend2 } from "react-icons/tb";
import { dataContext } from '../../Context/UserContext';
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import 'highlight.js/styles/github-dark.css';
import user from "../../assets/user.png"
import ai from "../../assets/ai.png"

function ChatSection() {
  let { sent, input, setInput, response, showResult, recentPrompt, loading, } = useContext(dataContext)


  return (
    <div className="chatsection">
      <div className="topsection">

        {!showResult ? <div className="heading">
          <span>WELCOME TO ADARSH GPT,</span>
          <span>I'm Your Own Assistant</span>
          <span>What can I help with?</span>
        </div> : <div className='result'>
          <div className="userbox" >
            <img src={user} alt="" width="35px" />
            <p>{recentPrompt}</p>
          </div>
          <div className="aibox">
            <img src={ai} alt="" width="40px" />
            {loading ? <div className='loader'>
              <hr />
              <hr />
              <hr />
            </div> : (
              <div className="markdown-output">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {String(response)}
                </ReactMarkdown>
              </div>)}
          </div>
        </div>}

      </div>
      <div className="bottomsection">
        <input onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (input.length > 0)
              sent(input)
            else console.log('na');
          }
        }} onChange={(e) => { setInput(e.target.value) }} type="text" placeholder='Enter a Prompt' value={input} />
        {input ?
          <button id='sendbtn' onClick={() => {
            if (input.length > 0)
              sent(input)
            else console.log('na');
          }}><TbSend2 /></button> : null}
        <Darkmode />
      </div>
    </div>
  )
}

export default ChatSection
