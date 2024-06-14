
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import AboutMovie from "./Pages/AboutMovie"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMovie/:id" element={<AboutMovie />} />
      </Routes>
    </>
  )
}

export default App
