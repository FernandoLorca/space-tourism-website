const CrewNav = ({ jsonLength, onClick, activeIndex }) => {
  return (
    <div className="flex justify-center gap-6 my-16">
      {Array.from({ length: jsonLength }, (_, i) => (
        <div
          key={i}
          id={i}
          onClick={onClick}
          className={`w-6 h-6 bg-white rounded-full cursor-pointer opacity-50 hover:opacity-75 ${
            i === activeIndex ? "opacity-100" : ""
          }`}
        ></div>
      ))}
    </div>
  )
}

export default CrewNav
