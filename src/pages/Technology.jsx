import { useEffect, useState } from "react";

import Navbar from "../components/navbar/MobileNvabar/Navbar";
import TabletNavbar from "../components/navbar/TabletNavbar/TabletNavbar";
import MobileNavbar from "../components/navbar/MobileNvabar/MobileNavbar";
import SectionTitle from "../components/SectionTitle";
import TechnologyImage from "../components/TechnologyComponents/TechnologyImage";
import TechnologyNav from "../components/TechnologyComponents/TechnologyNav";
import TechnologyDescription from "../components/TechnologyComponents/TechnologyDescription";

const Technology = () => {
  const [classNameOpen, setClassNameOpen] = useState("flex");
  const [classNameClose, setClassNameClose] = useState("hidden");
  const [dataJson, setDataJson] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTechnology, setActiveTechnology] = useState([
    {
      name: "Launch vehicle",
      images: {
        portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
        landscape: "./assets/technology/image-launch-vehicle-landscape.jpg",
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
  ]);

  const getData = async () => {
    const res = await fetch("../src/data.json");
    const data = await res.json();

    setDataJson(data.technology);
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

  const handleClickTechnologyNav = (e) => {
    setActiveIndex(parseInt(e.target.id));
    dataJson.filter((technology, index) => {
      if (parseInt(e.target.id) === index) {
        setActiveTechnology([technology]);
      }
    });
  };

  return (
    <main className="bg-technology">
      <MobileNavbar
        hiddenState={classNameClose}
        handleClickFunction={() => handleClickClose()}
      />

      <div className="p-7">
        <Navbar
          hiddenState={classNameOpen}
          handleClickFunction={() => handleClickOpen()}
        />

        <TabletNavbar />

        <SectionTitle number="03" text="SPACE LAUNCH 01" />
      </div>

      {activeTechnology.map((technology, index) => (
        <div key={index}>
          <TechnologyImage imagePath={`./src/${technology.images.landscape}`} />

          <div className="px-7">
            <TechnologyNav
              onClick={handleClickTechnologyNav}
              dataJson={dataJson}
              activeIndex={activeIndex}
            />

            <TechnologyDescription
              name={technology.name.toUpperCase()}
              description={technology.description}
            />
          </div>
        </div>
      ))}
    </main>
  );
};

export default Technology;
