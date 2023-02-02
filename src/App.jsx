import { useState } from "react"

import Navbar from "./components/navbar/Navbar"
import Hero from "./components/home/Hero"
import Explore from "./components/home/Explore"
import MobileNavbar from "./components/navbar/MobileNvabar/MobileNavbar"

function App() {
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
      <MobileNavbar
        hiddenState={classNameClose}
        handleClickFunction={() => handleClickClose()}
      />
      <div className="bg-mobile h-screen p-7">
        <Navbar
          hiddenState={classNameOpen}
          handleClickFunction={() => handleClickOpen()}
        />

        <main className="text-white text-center">
          <Hero />
          <Explore />
        </main>
      </div>
    </>
  )
}

export default App
