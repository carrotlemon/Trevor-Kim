import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from "./pages/Home"
import Sort from "./pages/Sort"
import Navbar from "./components/Navbar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <main className="main-content">
            <div className="page-content">
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sort" element={<Sort />} />
                    </Routes>
                </BrowserRouter>
            </div>
            <div className="flex-container">
                <div className="flex-box">
                    <h3>Contact</h3>
                    <p>trevorkim3141@gmail.com</p>
                </div>
                <div className="flex-box">
                    <h3>Address</h3>
                    <p>testtesttest</p>
                </div>
                <div className="flex-box">
                    <h3>i dont even know bro</h3>
                    <p>dont you love front end guys</p>
                </div>
            </div>
        </main>
    </>
  )
}

export default App