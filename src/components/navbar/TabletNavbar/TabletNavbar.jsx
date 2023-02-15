const TabletNavbar = () => {
  return (
    <nav className="hidden md:flex justify-between text-white -m-7">
      <a href="#" className="hover:opacity-75 p-7">
        <img src="./src/assets/shared/logo.svg" alt="" />
      </a>

      <ul className="pr-16 relative">
        <div className="bg-white w-full h-full absolute opacity-5"></div>
        <div className="flex gap-20 justify-center items-center h-full uppercase relative z-10">
          <li className="pl-16">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Crew</a>
          </li>
          <li>
            <a href="#">Technology</a>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default TabletNavbar
