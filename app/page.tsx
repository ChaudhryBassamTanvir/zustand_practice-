'use client'

import { useBearStore } from "./store/bearStore"

export default function Home() {
  const bears = useBearStore((state) => state.bears)
  const increasePopulation = useBearStore(
    (state) => state.increasePopulation
  )
  const removeAllBears = useBearStore(
    (state) => state.removeAllBears
  )

  const removeOneBear= useBearStore(
    (state)=>state.removeOneBear
  )

  return (
    <div>
      <div className="flex justify-center items-center">

      <h1 className="text-2xl font-bold m-8">{bears} bears around here...</h1>
      </div>

      <button className="bg-blue-500 text-white p-4 border-black rounded mx-5  hover:bg-blue-800 cursor-pointer" onClick={increasePopulation}>One Up</button>
    
      <button className="bg-purple-500 text-white p-4 border-black rounded mx-5  hover:bg-purple-800 cursor-pointer" onClick={removeOneBear}>One Remove</button>


      <button className="bg-red-500 text-white p-4 border-white rounded mx-5 hover:bg-red-800 cursor-pointer" onClick={removeAllBears}>Remove All</button>
    </div>
  )
}
