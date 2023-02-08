import { useState, useEffect } from "react";

import Navbar from "../components/navbar/Navbar";
import MobileNavbar from "../components/navbar/MobileNvabar/MobileNavbar";
import Moon from "../components/DestinationComponents/Moon";
import Mars from "../components/DestinationComponents/Mars";
import Europa from "../components/DestinationComponents/Europa";
import Titan from "../components/DestinationComponents/Titan";
import DestinationNavbar from "../components/DestinationComponents/DestinationNavbar";
import DestinationPick from "../components/DestinationComponents/DestinationPick";
import DestinationImage from "../components/DestinationComponents/DestinationImage";
import DestinationDescription from "../components/DestinationComponents/DestinationDescription";
import DestinationDistance from "../components/DestinationComponents/DestinationDistance";

const Destination = () => {
  const [classNameOpen, setClassNameOpen] = useState("flex");
  const [classNameClose, setClassNameClose] = useState("hidden");
  const [dataJson, setDataJson] = useState({});

  const getData = async () => {
    const res = await fetch("../src/data.json");
    const data = await res.json();

    setDataJson(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const { destinations } = dataJson;

  console.log(destinations);

  const handleClickOpen = () => {
    setClassNameOpen(classNameOpen === "hidden" ? "" : "hidden");
    setClassNameClose("fixed");
  };

  const handleClickClose = () => {
    setClassNameClose(classNameClose === "hidden" ? "" : "hidden");
    setClassNameOpen("block");
  };

  const handleDestinationNavbarClick = () => {
    destinations.map((destination) => {
      console.log(destination.name);
    });
  };

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

          <DestinationPick number="01" />

          <DestinationImage imagePath="../src/assets/destination/image-moon.png" />

          <DestinationNavbar
            onClick={handleDestinationNavbarClick}
            destinationName="MOON"
          />

          <DestinationDescription
            title="MOON"
            description="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
          />

          <DestinationDistance avgNumber="384,400 KM" numberDays="3 DAYS" />
        </div>
      </main>
    </>
  );
};

export default Destination;
