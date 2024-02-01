import { useState } from 'react';

import Navbar from '../components/navbar/MobileNvabar/Navbar';
import MobileNavbar from '../components/navbar/MobileNvabar/MobileNavbar';
import TabletNavbar from '../components/navbar/TabletNavbar/TabletNavbar';
import Hero from '../components/home/Hero';
import Explore from '../components/home/Explore';

const Home = () => {
  const [classNameOpen, setClassNameOpen] = useState('flex');
  const [classNameClose, setClassNameClose] = useState('hidden');

  const handleClickOpen = () => {
    setClassNameOpen(classNameOpen === 'hidden' ? '' : 'hidden');
    setClassNameClose('fixed');
  };

  const handleClickClose = () => {
    setClassNameClose(classNameClose === 'hidden' ? '' : 'hidden');
    setClassNameOpen('block');
  };

  return (
    <div>
      <MobileNavbar
        hiddenState={classNameClose}
        handleClickFunction={() => handleClickClose()}
      />

      <div className="bg-home-desktop p-7 md:h-screen">
        <Navbar
          hiddenState={classNameOpen}
          handleClickFunction={() => handleClickOpen()}
        />
        <TabletNavbar />

        <div className="flex items-center">
          <main className="text-white text-center w-full">
            <div className="lg:flex my-20">
              <div className="w-full">
                <Hero />
              </div>
              <div className="w-full">
                <Explore />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
