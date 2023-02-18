const CrewDescription = ({ crewRole, crewName, crewBio }) => {
  return (
    <div className="text-center text-indigo-200 flex flex-col items-center">
      <div>
        <h4 className="text-3xl">{crewRole}</h4>
      </div>
      <div>
        <h1 className="text-5xl pt-7 text-white">{crewName}</h1>
      </div>
      <p className="pt-10 md:max-w-4xl">{crewBio}</p>
    </div>
  );
};

export default CrewDescription;
