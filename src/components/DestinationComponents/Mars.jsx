import DestinationPick from "./DestinationPick"
import DestinationImage from "./DestinationImage"
import DestinationNavbar from "./DestinationNavbar"
import DestinationDescription from "./DestinationDescription"
import DestinationDistance from "./DestinationDistance"

const Mars = () => {
  return (
    <>
      <DestinationPick number="02" />

      <DestinationImage imagePath="./src/assets/destination/image-mars.png" />

      <DestinationNavbar />

      <DestinationDescription
        title="MARS"
        description="See our planet as you’ve never seen it before. A perfect relaxing trip
away to help regain perspective and come back refreshed. While you’re
there, take in some history by visiting the Luna 2 and Apollo 11 landing
sites."
      />

      <DestinationDistance avgNumber="384,400 KM" numberDays="3 DAYS" />
    </>
  )
}

export default Mars
