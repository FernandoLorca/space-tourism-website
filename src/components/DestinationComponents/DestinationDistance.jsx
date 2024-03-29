const DestinationDistance = ({ avgNumber, numberDays }) => {
  return (
    <div className="text-white text-center my-32">
      <div className="mb-20">
        <h5 className="text-indigo-200 mb-10">AVG. DISTANCE</h5>
        <h2 className="text-7xl">{avgNumber}</h2>
      </div>
      <div>
        <h5 className="text-indigo-200 mb-10">EST. TRAVEL</h5>
        <h2 className="text-7xl">{numberDays}</h2>
      </div>
    </div>
  );
};

export default DestinationDistance;
