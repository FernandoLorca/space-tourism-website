import TabletNavbarAnchor from "./TabletNavbarAnchor";

const TabletNavbar = () => {
  return (
    <nav className="hidden md:flex justify-between text-white -m-7">
      <a href="#" className="hover:opacity-75 p-7">
        <img src="./src/assets/shared/logo.svg" alt="" />
      </a>

      <ul className="pr-16 relative">
        <div className="bg-white w-full h-full absolute opacity-5"></div>
        <div className="flex gap-20 justify-center items-center h-full uppercase relative z-10">
          <TabletNavbarAnchor path="/" text="Home" />
          <TabletNavbarAnchor path="/destination" text="Destination" />
          <TabletNavbarAnchor path="/crew" text="Crew" />
          <TabletNavbarAnchor path="/technology" text="Technology" />
        </div>
      </ul>
    </nav>
  );
};

export default TabletNavbar;
