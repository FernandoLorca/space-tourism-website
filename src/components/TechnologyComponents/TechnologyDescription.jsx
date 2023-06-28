const TechnologyDescription = ({ name, description }) => {
  return (
    <div className="text-white w-6/12">
      <h4 className="text-indigo-200 text-center text-3xl">
        THE TERMINOLOGY...
      </h4>

      <h1 className="text-5xl text-center pt-7">{name}</h1>

      <p className="py-10 text-center text-indigo-200">{description}</p>
    </div>
  );
};

export default TechnologyDescription;
