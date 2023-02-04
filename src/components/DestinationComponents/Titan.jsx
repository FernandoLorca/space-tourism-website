import DestinationPick from "./DestinationPick";
import DestinationImage from "./DestinationImage";
import DestinationNavbar from "./DestinationNavbar";
import DestinationDescription from "./DestinationDescription";
import DestinationDistance from "./DestinationDistance";

const Titan = () => {
  return (
    <>
      <DestinationPick number="01" />

      <DestinationImage imagePath="./src/assets/destination/image-titan.png" />

      <DestinationNavbar />

      <DestinationDescription
        title="TITAN"
        description="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
      />

      <DestinationDistance avgNumber="1.6 BIL, KM" numberDays="7 YEARS" />
    </>
  );
};

export default Titan;
