const TechnologyNav = ({ dataJson, onClick, activeIndex }) => {
  return (
    <div className="text-white flex justify-center gap-10 my-10">
      {Array.from({ length: dataJson.length }, (_, i) => (
        <div
          key={i}
          id={i}
          onClick={onClick}
          className={`border rounded-full border-gray-600 w-20 h-20 flex justify-center items-center cursor-pointer hover:bg-white hover:text-blue-900 hover:border-0 ${
            activeIndex === i ? 'bg-white text-blue-900 border-0' : ''
          }`}
        >
          {i + 1}
        </div>
      ))}
    </div>
  )
}

export default TechnologyNav
