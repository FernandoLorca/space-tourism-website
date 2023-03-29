const DestinationImage = ({ imagePath }) => {
  return (
    <div className="flex justify-center">
      <div className="my-20 w-96 h-96">
        <img src={imagePath} alt="" />
      </div>
    </div>
  )
}

export default DestinationImage
