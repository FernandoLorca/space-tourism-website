import { useState } from "react";

import Navbar from "../components/navbar/Navbar";
import MobileNavbar from "../components/navbar/MobileNvabar/MobileNavbar";
import Moon from "../components/DestinationComponents/Moon";
import Mars from "../components/DestinationComponents/Mars";
import Europa from "../components/DestinationComponents/Europa";
import Titan from "../components/DestinationComponents/Titan";

const Destination = () => {
  const [classNameOpen, setClassNameOpen] = useState("flex");
  const [classNameClose, setClassNameClose] = useState("hidden");

  const handleClickOpen = () => {
    setClassNameOpen(classNameOpen === "hidden" ? "" : "hidden");
    setClassNameClose("fixed");
  };

  const handleClickClose = () => {
    setClassNameClose(classNameClose === "hidden" ? "" : "hidden");
    setClassNameOpen("block");
  };

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

          <Moon />

          <Mars />

          <Europa />

          <Titan />
        </div>
      </main>
    </>
  );
};

export default Destination;
