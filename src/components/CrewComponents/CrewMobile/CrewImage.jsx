const CrewImage = ({ imagePath }) => {
  return (
    <div className="flex justify-center items-end border-b md:border-0 border-white border-opacity-20 pt-16 md:pt-0 imgCrewHigh">
      <div className="max-w-sm">
        <img
          src={imagePath}
          className="w-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default CrewImage;
