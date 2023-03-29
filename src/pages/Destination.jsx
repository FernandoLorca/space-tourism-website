import { useState, useEffect } from "react";

import Navbar from "../components/navbar/MobileNvabar/Navbar";
import TabletNavbar from "../components/navbar/TabletNavbar/TabletNavbar";
import MobileNavbar from "../components/navbar/MobileNvabar/MobileNavbar";
import DestinationNavbar from "../components/DestinationComponents/DestinationNavbar";
import SectionTitle from "../components/SectionTitle";
import DestinationImage from "../components/DestinationComponents/DestinationImage";
import DestinationDescription from "../components/DestinationComponents/DestinationDescription";
import DestinationDistance from "../components/DestinationComponents/DestinationDistance";

const Destination = () => {
  const [classNameOpen, setClassNameOpen] = useState("flex");
  const [classNameClose, setClassNameClose] = useState("hidden");
  const [dataJson, setDataJson] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeDestination, setActiveDestination] = useState([
    {
      name: "Moon",
      images: {
        png: "./assets/destination/image-moon.png",
        webp: "./assets/destination/image-moon.webp",
      },
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days",
    },
  ]);

  const getData = async () => {
    const res = await fetch("../src/data.json");
    const data = await res.json();

    setDataJson(data.destinations);
  };

  useEffect(() => {
    getData();
  }, []);

  const destinationsNamesArr = dataJson.map((destination) =>
    destination.name.toUpperCase()
  );

  const handleClickOpen = () => {
    setClassNameOpen(classNameOpen === "hidden" ? "" : "hidden");
    setClassNameClose("fixed");
  };

  const handleClickClose = () => {
    setClassNameClose(classNameClose === "hidden" ? "" : "hidden");
    setClassNameOpen("block");
  };

  const handleDestinationNavbarClick = (e) => {
    dataJson.filter((destinationName) => {
      if (e.target.innerText === destinationName.name.toUpperCase()) {
        setActiveDestination([destinationName]);
        setActiveIndex(
          destinationsNamesArr.indexOf(destinationName.name.toUpperCase())
        );
      }
    });
  };

  return (
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
        <TabletNavbar />

        <SectionTitle number="01" text="PICK YOUR DESTINATION" />

        {activeDestination.map((destination, index) => (
          <div key={index}>
            <DestinationImage imagePath={`../src/${destination.images.png}`} />

            <DestinationNavbar
              onClick={handleDestinationNavbarClick}
              destinationNameArr={destinationsNamesArr}
              activeIndex={activeIndex}
            />

            <DestinationDescription
              title={destination.name.toUpperCase()}
              description={destination.description}
            />

            <DestinationDistance
              avgNumber={destination.distance.toUpperCase()}
              numberDays={destination.travel.toUpperCase()}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Destination;
