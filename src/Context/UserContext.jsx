import React, { createContext, useContext, useState } from 'react'
import AIResponse from '../services/api'
export const dataContext = createContext()

function UserContext({children}) {
  const[extend, setExtend] = useState(false)
  const [input , setInput] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading , setLoading] = useState(true);
  const [response , setResponse] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([])

  const getUniqueIndex = () => {
    let idx = Math.random()
    return parseInt(idx*1000);
  };

function newChat(){
    setShowResult(false)
    setLoading(false)
}


    async function sent(input){
    setResponse("")
    setShowResult(true)
    setRecentPrompt(input)
    setLoading(true);
    setPrevPrompt(prev=>[...prev, [getUniqueIndex(), input]])
    let result = await AIResponse(input)
    setResponse(result.split("**") && result.split("*"))
    setLoading(false)
    setInput("")
    setExtend(true)
    }

    const data  = {
    sent,
    extend,
    setExtend,
    input,
    setInput,
    response,
    setResponse,
    showResult,
    setShowResult,
    loading,
    setLoading,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    setPrevPrompt,
    newChat
    }

  return (
    <>
    <dataContext.Provider value={data}>
    {children}
    </dataContext.Provider>
    </>
  )
}

export default UserContext
