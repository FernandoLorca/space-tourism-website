import { useState } from 'react'

import { Link } from 'react-router-dom'

const Explore = () => {
  const [hover, setHover] = useState('')

  const handlerExploreHover = () => setHover(true)
  const handlerExploreLeave = () => setHover(false)

  return (
    <div className="flex justify-center">
      <div
        onClick={() => handlerExploreHover()}
        className="relative flex justify-center items-center cursor-pointer"
      >
        <div
          className={`bg-slate-900 rounded-full absolute w-96 h-96 z-10 opacity-50 transition- ${
            hover ? '' : 'hidden'
          }`}
        ></div>
        <Link
          to="/destination"
          className="bellefairFont text-slate-800 text-4xl flex justify-center items-center"
        >
          <div
            className="absolute z-20 bg-white w-56 h-56 flex justify-center items-center rounded-full"
            onMouseOver={handlerExploreHover}
            onMouseLeave={handlerExploreLeave}
          >
            EXPLORE
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Explore
