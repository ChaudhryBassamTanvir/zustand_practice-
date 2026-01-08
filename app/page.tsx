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

  return (
    <div>
      <h1>{bears} bears around here...</h1>

      <button className="bg-blue-500 text-white p-4 border-black rounded mx-5" onClick={increasePopulation}>One Up</button>
      <button className="bg-red-500 text-white p-4 border-black rounded mx-5" onClick={removeAllBears}>Remove All</button>
    </div>
  )
}
