import CrewImage from '../CrewMobile/CrewImage';
import CrewNav from '../CrewMobile/CrewNav';
import CrewDescription from '../CrewMobile/CrewDescription';

const CrewTablet = ({
  activeCrew,
  activeIndex,
  dataJson,
  handleClickCrewNav,
}) => {
  return activeCrew.map((crew, index) => (
    <div key={index}>
      <CrewDescription
        crewRole={crew.role.toUpperCase()}
        crewName={crew.name.toUpperCase()}
        crewBio={crew.bio}
      />

      <CrewNav
        jsonLength={dataJson.length}
        activeIndex={activeIndex}
        onClick={handleClickCrewNav}
      />

      <CrewImage imagePath={`./src/${crew.images.png}`} />
    </div>
  ));
};

export default CrewTablet;
