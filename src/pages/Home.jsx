import { useState } from "react";

import Navbar from "../components/navbar/MobileNvabar/Navbar";
import MobileNavbar from "../components/navbar/MobileNvabar/MobileNavbar";
import TabletNavbar from "../components/navbar/TabletNavbar/TabletNavbar";
import Hero from "../components/home/Hero";
import Explore from "../components/home/Explore";

const Home = () => {
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
      <MobileNavbar
        hiddenState={classNameClose}
        handleClickFunction={() => handleClickClose()}
      />

      <div className="bg-mobile h-screen p-7">
        <Navbar
          hiddenState={classNameOpen}
          handleClickFunction={() => handleClickOpen()}
        />
        <TabletNavbar />

        <main className="text-white text-center">
          <Hero />
          <Explore />
        </main>
      </div>
    </>
  );
};

export default Home;
