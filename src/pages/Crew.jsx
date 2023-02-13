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
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeCrew, setActiveCrew] = useState([
    {
      name: "Douglas Hurley",
      images: {
        png: "./assets/crew/image-douglas-hurley.png",
        webp: "./assets/crew/image-douglas-hurley.webp",
      },
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
  ])

  const getData = async () => {
    const res = await fetch("../src/data.json")
    const data = await res.json()

    setDataJson(data.crew)
  }

  useEffect(() => {
    getData()
  }, [])

  // console.log(dataJson)

  const handleClickOpen = () => {
    setClassNameOpen(classNameOpen === "hidden" ? "" : "hidden")
    setClassNameClose("fixed")
  }

  const handleClickClose = () => {
    setClassNameClose(classNameClose === "hidden" ? "" : "hidden")
    setClassNameOpen("block")
  }

  const handleClickCrewNav = e => {
    setActiveIndex(parseInt(e.target.id))
    const crewFilter = dataJson.filter((obj, index) => {
      if (parseInt(e.target.id) === index) {
        return [obj]
      }
    })

    return setActiveCrew(crewFilter)
  }

  return (
    <main className="bg-slate-500">
      <MobileNavbar
        hiddenState={classNameClose}
        handleClickFunction={() => handleClickClose()}
      />

      <div className="bg-crew h-screen p-7">
        <Navbar
          hiddenState={classNameOpen}
          handleClickFunction={() => handleClickOpen()}
        />

        <SectionTitle number="02" />

        {activeCrew.map((crew, index) => (
          <div key={index}>
            <CrewImage imagePath={`./src/${crew.images.png}`} />

            <CrewNav
              jsonLength={dataJson.length}
              activeIndex={activeIndex}
              onClick={handleClickCrewNav}
            />

            <CrewDescription
              crewRole={crew.role.toUpperCase()}
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
