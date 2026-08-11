import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [color, setColor] = useState("white") // Default color  

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => setColor("red")} className='rounded-full outline-none px-4 py-1  bg-red-500 text-white '>Red</button>
            <button onClick={() => setColor("yellow")} className='rounded-full outline-none px-4 py-1  bg-yellow-300 text-black '>Yellow</button>
            <button onClick={() => setColor("pink")} className='rounded-full outline-none px-4 py-1  bg-pink-500 text-white '>Pink</button>
            <button onClick={() => setColor("blue")} className='rounded-full outline-none px-4 py-1  bg-blue-500 text-white '>Blue</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
