import { useState, useEffect } from "react"

import MobileNavbar from "../components/navbar/MobileNvabar/MobileNavbar"
import Navbar from "../components/navbar/Navbar"
import SectionTitle from "../components/SectionTitle"
import CrewImage from "../components/CrewComponents/CrewImage"
import CrewNav from "../components/CrewComponents/CrewNav"
import CrewDescription from "../components/CrewComponents/CrewDescription"

const Crew = () => {
  const [classNameOpen, setClassNameOpen] = useState("flex")
  const [classNameClose, setClassNameClose] = useState("hidden")
  const [dataJson, setDataJson] = useState([])

  const getData = async () => {
    const res = await fetch("../src/data.json")
    const data = await res.json()

    setDataJson(data.crew)
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(dataJson)
  const handleClickOpen = () => {
    setClassNameOpen(classNameOpen === "hidden" ? "" : "hidden")
    setClassNameClose("fixed")
  }

  const handleClickClose = () => {
    setClassNameClose(classNameClose === "hidden" ? "" : "hidden")
    setClassNameOpen("block")
  }

  return (
    <main className="bg-slate-500">
      <MobileNavbar
        hiddenState={classNameClose}
        handleClickFunction={() => handleClickClose()}
      />

      <div className="bg-crew p-7">
        <Navbar
          hiddenState={classNameOpen}
          handleClickFunction={() => handleClickOpen()}
        />

        <SectionTitle number="02" />

        {dataJson.map((crew, index) => (
          <div key={index}>
            <CrewImage imagePath={`./src/${crew.images.png}`} />

            <CrewNav />

            <CrewDescription
              CrewRole={crew.role.toUpperCase()}
              crewName={crew.name.toUpperCase()}
              crewBio={crew.bio}
            />
          </div>
        ))}
      </div>
    </main>
  )
}

export default Crew
