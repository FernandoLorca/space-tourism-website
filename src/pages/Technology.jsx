import { useEffect, useState } from 'react'

import Navbar from '../components/navbar/Navbar'
import MobileNavbar from '../components/navbar/MobileNvabar/MobileNavbar'
import SectionTitle from '../components/SectionTitle'
import TechnologyImage from '../components/TechnologyComponents/TechnologyImage'
import TechnologyNav from '../components/TechnologyComponents/TechnologyNav'
import TechnologyDescription from '../components/TechnologyComponents/TechnologyDescription'

const Technology = () => {
  const [classNameOpen, setClassNameOpen] = useState('flex')
  const [classNameClose, setClassNameClose] = useState('hidden')
  const [dataJson, setDataJson] = useState([])

  const getData = async () => {
    const res = await fetch('../src/data.json')
    const data = await res.json()

    setDataJson(data.technology)
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(dataJson)

  const handleClickOpen = () => {
    setClassNameOpen(classNameOpen === 'hidden' ? '' : 'hidden')
    setClassNameClose('fixed')
  }

  const handleClickClose = () => {
    setClassNameClose(classNameClose === 'hidden' ? '' : 'hidden')
    setClassNameOpen('block')
  }

  return (
    <main className="bg-crew">
      <MobileNavbar
        hiddenState={classNameClose}
        handleClickFunction={() => handleClickClose()}
      />

      <div className="p-7">
        <Navbar
          hiddenState={classNameOpen}
          handleClickFunction={() => handleClickOpen()}
        />

        <SectionTitle number="03" text="SPACE LAUNCH 01" />
      </div>

      {dataJson.map((technology, index) => (
        <div key={index}>
          <TechnologyImage imagePath={`./src/${technology.images.landscape}`} />

          <div className="px-7">
            <TechnologyNav />

            <TechnologyDescription
              name="THE TERMINOLOGY..."
              description={technology.description}
            />
          </div>
        </div>
      ))}
    </main>
  )
}

export default Technology
