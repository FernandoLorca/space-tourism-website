import CrewImage from './CrewImage';
import CrewNav from './CrewNav';
import CrewDescription from './CrewDescription';

const CrewMobile = ({
  activeCrew,
  activeIndex,
  dataJson,
  handleClickCrewNav,
}) => {
  return activeCrew.map((crew, index) => (
    <div key={index}>
      <CrewImage imagePath={`${crew.images.png}`} />

      <CrewNav
        jsonLength={dataJson.length}
        activeIndex={activeIndex}
        onClick={handleClickCrewNav}
      />

      <CrewDescription
        crewRole={crew.role.toUpperCase()}
        crewName={crew.name.toUpperCase()}
        crewBio={crew.bio}
      />
    </div>
  ));
};

export default CrewMobile;
