import { useState, useEffect } from "react"

import Navbar from "../components/navbar/Navbar"
import MobileNavbar from "../components/navbar/MobileNvabar/MobileNavbar"
import Moon from "../components/DestinationComponents/Moon"
import Mars from "../components/DestinationComponents/Mars"
import Europa from "../components/DestinationComponents/Europa"
import Titan from "../components/DestinationComponents/Titan"
import DestinationNavbar from "../components/DestinationComponents/DestinationNavbar"
import DestinationPick from "../components/DestinationComponents/DestinationPick"
import DestinationImage from "../components/DestinationComponents/DestinationImage"
import DestinationDescription from "../components/DestinationComponents/DestinationDescription"
import DestinationDistance from "../components/DestinationComponents/DestinationDistance"

const Destination = () => {
  const [classNameOpen, setClassNameOpen] = useState("flex")
  const [classNameClose, setClassNameClose] = useState("hidden")
  const [dataJson, setDataJson] = useState([])
  const [activeDestination, setActiveDestination] = useState(<Moon />)

  const getData = async () => {
    const res = await fetch("../src/data.json")
    const data = await res.json()

    setDataJson(data.destinations)
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(dataJson)

  const destinationsNamesArr = dataJson.map(destination => destination.name)

  const destinationsArr = [<Moon />, <Mars />, <Europa />, <Titan />]

  const handleClickOpen = () => {
    setClassNameOpen(classNameOpen === "hidden" ? "" : "hidden")
    setClassNameClose("fixed")
  }

  const handleClickClose = () => {
    setClassNameClose(classNameClose === "hidden" ? "" : "hidden")
    setClassNameOpen("block")
  }

  const handleDestinationNavbarClick = () => {}

  return (
    <>
      <main>
        <MobileNavbar
          hiddenState={classNameClose}
          handleClickFunction={() => handleClickClose()}
        />

        <div className="bg-destination p-7">
          <Navbar
            hiddenState={classNameOpen}
            handleClickFunction={() => handleClickOpen()}
          />

          {dataJson.map((destination, index) => (
            <div key={index}>
              <DestinationPick number="01" />

              <DestinationImage
                imagePath={`../src/${destination.images.png}`}
              />

              <DestinationNavbar
                onClick={handleDestinationNavbarClick}
                destinationNameArr={destinationsNamesArr}
              />

              <DestinationDescription
                title={destination.name.toUpperCase()}
                description={destination.description}
              />

              <DestinationDistance avgNumber="384,400 KM" numberDays="3 DAYS" />
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default Destination
