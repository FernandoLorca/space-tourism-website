import { useState } from "react"

import Navbar from "../components/navbar/Navbar"
import MobileNavbar from "../components/navbar/MobileNvabar/MobileNavbar"

const Destination = () => {
  const [classNameOpen, setClassNameOpen] = useState("flex")
  const [classNameClose, setClassNameClose] = useState("hidden")

  const handleClickOpen = () => {
    setClassNameOpen(classNameOpen === "hidden" ? "" : "hidden")
    setClassNameClose("fixed")
  }

  const handleClickClose = () => {
    setClassNameClose(classNameClose === "hidden" ? "" : "hidden")
    setClassNameOpen("block")
  }

  return (
    <>
      <main>
        <MobileNavbar
          hiddenState={classNameClose}
          handleClickFunction={() => handleClickClose()}
        />
        <div className="bg-destination h-full p-7">
          <Navbar
            hiddenState={classNameOpen}
            handleClickFunction={() => handleClickOpen()}
          />

          <div className="text-white text-center mt-10">
            <h5>
              <span className="opacity-50 mr-5">01</span> PICK YOUR DESTINATION
            </h5>
          </div>

          <div className="flex justify-center">
            <div className="my-20 w-96 h-96">
              <img src="./src/assets/destination/image-moon.png" alt="" />
            </div>
          </div>

          <nav className="text-white mb-5">
            <ul className="flex justify-around">
              <li>
                <a
                  href="#"
                  className="border-b-4 pb-4 text-3xl hover:opacity-75"
                >
                  MOON
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border-b-4 pb-4 text-3xl hover:opacity-75"
                >
                  MARS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border-b-4 pb-4 text-3xl hover:opacity-75"
                >
                  EUROPA
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border-b-4 pb-4 text-3xl hover:opacity-75"
                >
                  TITAN
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center text-indigo-200 border-b border-white border-opacity-20">
            <h1 className="text-9xl pt-20 pb-14 text-white">MOON</h1>
            <p className="pb-10">
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
          </div>

          <div className="text-white text-center my-32">
            <div className="mb-20">
              <h5 className="text-indigo-200 mb-10">AVG. DISTANCE</h5>
              <h2 className="text-7xl">384,400 KM</h2>
            </div>
            <div>
              <h5 className="text-indigo-200 mb-10">EST. TRAVEL</h5>
              <h2 className="text-7xl">3 DAYS</h2>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Destination
