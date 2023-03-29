const DestinationDescription = ({ description, title }) => {
  return (
    <div className="text-center text-indigo-200 border-b border-white border-opacity-20">
      <h1 className="text-9xl pt-20 pb-14 text-white">{title}</h1>
      <p className="pb-10">{description}</p>
    </div>
  )
}

export default DestinationDescription
