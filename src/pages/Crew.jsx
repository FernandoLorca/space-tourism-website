import { useState, useEffect } from "react";

import Navbar from "../components/navbar/MobileNvabar/Navbar";
import TabletNavbar from "../components/navbar/TabletNavbar/TabletNavbar";
import MobileNavbar from "../components/navbar/MobileNvabar/MobileNavbar";
import SectionTitle from "../components/SectionTitle";
import CrewMobile from "../components/CrewComponents/CrewMobile/CrewMobile";
import CrewTablet from "../components/CrewComponents/CrewTablet/CrewTablet";

const Crew = () => {
  const [classNameOpen, setClassNameOpen] = useState("flex");
  const [classNameClose, setClassNameClose] = useState("hidden");
  const [dataJson, setDataJson] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
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
  ]);

  const getData = async () => {
    const res = await fetch("../src/data.json");
    const data = await res.json();

    setDataJson(data.crew);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClickOpen = () => {
    setClassNameOpen(classNameOpen === "hidden" ? "" : "hidden");
    setClassNameClose("fixed");
  };

  const handleClickClose = () => {
    setClassNameClose(classNameClose === "hidden" ? "" : "hidden");
    setClassNameOpen("block");
  };

  const handleClickCrewNav = (e) => {
    setActiveIndex(parseInt(e.target.id));
    const crewFilter = dataJson.filter((obj, index) => {
      if (parseInt(e.target.id) === index) {
        return [obj];
      }
    });

    return setActiveCrew(crewFilter);
  };

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
        <TabletNavbar />

        <SectionTitle number="02" text="MEET YOUR CREW" />

        <div className="md:hidden">
          <CrewMobile
            activeCrew={activeCrew}
            activeIndex={activeIndex}
            dataJson={dataJson}
            handleClickCrewNav={handleClickCrewNav}
          />
        </div>
        <div className="sm:hidden md:block">
          <CrewTablet
            activeCrew={activeCrew}
            activeIndex={activeIndex}
            dataJson={dataJson}
            handleClickCrewNav={handleClickCrewNav}
          />
        </div>
      </div>
    </main>
  );
};

export default Crew;
