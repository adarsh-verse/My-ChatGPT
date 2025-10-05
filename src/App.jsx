import { useContext } from "react"
import ChatSection from "./components/ChatSection/ChatSection"
import Separation from "./components/Separation/Separation"
import Sidebar from "./components/SideBar/Sidebar"

function App() {
  return (
    <>
    <Sidebar/>
    <Separation/>
    <ChatSection/>
    </>
  )
}

export default App
