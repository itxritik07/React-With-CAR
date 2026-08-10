import React from 'react'
import Card from './Components/Card'

const App = () => {

  // Can we pass object ? ✅
  // let myObj = {
  //   name: "Thor",
  //   power: "Hammer"
  // };

  // Can we pass Array ? ✅
  // let myArr = [1, 2, 3, 4, 5]


  return (
    <>
      <h1 className='bg-amber-400 text-center w-[24vw] mx-auto font-bold p-4 rounded-2xl'>Tailwind testing...</h1>

      {/* <Card channel="welcome to my channel" obj={myObj} array={myArr}/> */}
      <Card username="Rohan" role="Developer" />
    </>
  )
}

export default App

