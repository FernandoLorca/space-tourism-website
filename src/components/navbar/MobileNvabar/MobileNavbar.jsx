import NavbarAnchor from "./NavbarAnchor"

const MobileNavbar = ({ hiddenState, handleClickFunction }) => {
  return (
    <div
      className={`p-5 bg-slate-400 fixed right-1 w-4/5 h-full pt-14 px-12 ${hiddenState}`}
    >
      <div
        onClick={handleClickFunction}
        className="flex justify-end cursor-pointer hover:opacity-75"
      >
        <img src="./src/assets/shared/icon-close.svg" alt="" />
      </div>
      <nav className="mt-20">
        <ul className="text-white">
          <NavbarAnchor number="00" text="HOME" />
          <NavbarAnchor number="01" text="DESTINATION" />
          <NavbarAnchor number="02" text="CREW" />
          <NavbarAnchor number="03" text="TECHNOLOGY" />
        </ul>
      </nav>
    </div>
  )
}

export default MobileNavbar
