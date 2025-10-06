import React, { createContext, useContext, useEffect, useState } from 'react'
import AIResponse from '../services/api'
export const dataContext = createContext()

function UserContext({ children }) {
    const [extend, setExtend] = useState(false)
    const [input, setInput] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompt, setPrevPrompt] = useState([])

    const getUniqueIndex = () => {
        let idx = Math.random()
        return parseInt(idx * 1000);
    };

    function newChat() {
        setShowResult(false)
        setLoading(false)
    }

    async function sent(input) {
        setResponse("")
        setShowResult(true)
        setRecentPrompt(input)
        setLoading(true);

        let result = await AIResponse(input)
        result = result.split("**") && result.split("*")

        setResponse(result)
        setLoading(false)
        setInput("")
        setExtend(true)

        const newEntry = {
            id: getUniqueIndex(),
            prompt: input,
            response: result,
        };

        while (prevPrompt.length >= 8) {
            prevPrompt.shift();
        }

        const UpdatedHistory = [...prevPrompt, newEntry];
        setPrevPrompt(UpdatedHistory);
        localStorage.setItem('chatHistory', JSON.stringify(UpdatedHistory));

    }

    useEffect(() => {
        const stored = localStorage.getItem('chatHistory');
        // console.log(stored);
        if (stored) {
            setPrevPrompt(JSON.parse(stored))
        }
        console.log(prevPrompt);
    }, [])

    const data = {
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
