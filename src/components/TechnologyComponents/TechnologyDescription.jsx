const TechnologyDescription = ({ name, description }) => {
  return (
    <div className="text-white">
      <h4 className="text-indigo-200 text-center text-3xl">{name}</h4>

      <h1 className="text-5xl text-center pt-7">LAUNCH VEHICLE</h1>

      <p className="py-10 text-center text-indigo-200">{description}</p>
    </div>
  )
}

export default TechnologyDescription
