const DestinationPick = ({ number, text }) => {
  return (
    <div className="text-white text-center md:text-left mt-10">
      <h5>
        <span className="opacity-50 mr-5">{number}</span>
        {text}
      </h5>
    </div>
  );
};

export default DestinationPick;
