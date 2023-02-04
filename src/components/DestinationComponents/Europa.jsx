import DestinationPick from "./DestinationPick";
import DestinationImage from "./DestinationImage";
import DestinationNavbar from "./DestinationNavbar";
import DestinationDescription from "./DestinationDescription";
import DestinationDistance from "./DestinationDistance";

const Europa = () => {
  return (
    <>
      <DestinationPick number="01" />

      <DestinationImage imagePath="./src/assets/destination/image-europa.png" />

      <DestinationNavbar />

      <DestinationDescription
        title="EUROPA"
        description="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
      />

      <DestinationDistance avgNumber="628 MIL, KM" numberDays="3 YEARS" />
    </>
  );
};

export default Europa;
