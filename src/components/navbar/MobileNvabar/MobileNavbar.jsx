import NavbarAnchor from './NavbarAnchor'

const MobileNavbar = ({ hiddenState, handleClickFunction }) => {
  return (
    <div className="relative md:hidden">
      <div
        className={`h-screen w-screen absolute z-20 cursor-pointer ${hiddenState}`}
        onClick={handleClickFunction}
      ></div>
      <div
        className={`p-5 navbar fixed right-0 w-4/5 h-full pt-14 px-12 z-30 ${hiddenState}`}
      >
        <div
          onClick={handleClickFunction}
          className="flex justify-end cursor-pointer hover:opacity-75"
        >
          <img src="./src/assets/shared/icon-close.svg" alt="" />
        </div>
        <nav className="mt-20">
          <ul className="text-white">
            <NavbarAnchor path="/" number="00" text="HOME" />
            <NavbarAnchor path="/destination" number="01" text="DESTINATION" />
            <NavbarAnchor path="/crew" number="02" text="CREW" />
            <NavbarAnchor path="/technology" number="03" text="TECHNOLOGY" />
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default MobileNavbar
