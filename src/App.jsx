import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from "./pages/Home"
import Sort from "./pages/Sort"
import JS from "./pages/JS"
import Navbar from "./components/Navbar"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <main className="main-content">
            <div className="min-h-[70vh] mt-20 mx-[20vmin]">
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sort" element={<Sort />} />
                        <Route path="/JS" element={<JS />} />
                    </Routes>
                </BrowserRouter>
            </div>
            <footer className="bg-black text-white p-4 flex justify-evenly">
                <div className="pl-10 pr-10 w-[30vmin]">
                    <h3>Contact</h3>
                    <p>trevorkim3141@gmail.com</p>
                </div>
                <div className="pl-10 pr-10 w-[30vmin]">
                    <h3>Address</h3>
                    <p>testtesttest</p>
                </div>
                <div className="pl-10 pr-10 w-[30vmin]">
                    <h3>i dont even know bro</h3>
                    <p>dont you love front end guys</p>
                </div>
            </footer>
        </main>
    </>
  )
}

export default App