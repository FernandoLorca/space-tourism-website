const Navbar = ({ handleClickFunction, hiddenState }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <img src="./src/assets/shared/logo.svg" alt="" />
      </div>
      <div
        onClick={handleClickFunction}
        className={`flex flex-col gap-3 max-w-full w-12 hover:opacity-75 cursor-pointer transition-opacity duration-100 ${hiddenState}`}
      >
        <div className="h-1 bg-indigo-200"></div>
        <div className="h-1 bg-indigo-200"></div>
        <div className="h-1 bg-indigo-200"></div>
      </div>
    </div>
  )
}

export default Navbar
