import { useState } from "react"

const Explore = () => {
  const [className, setClassName] = useState("hidden")

  const handleExpansion = () => setClassName("")

  return (
    <div className="flex justify-center">
      <div
        onClick={() => handleExpansion()}
        className="w-56 h-56 rounded-full flex justify-center items-center bg-white cursor-pointer"
      >
        <div
          className={`bg-slate-200 opacity-20 rounded-full w-96 h-96 ${
            className ? "hidden" : ""
          }`}
        ></div>
        <p className="bellefairFont text-slate-800 text-4xl">EXPLORE</p>
      </div>
    </div>
  )
}

export default Explore
