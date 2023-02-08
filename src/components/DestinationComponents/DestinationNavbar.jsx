import DestinationNavbarAnchor from "./DestinationNavbarAnchor"

const DestinationNavbar = ({ onClick, destinationNameArr }) => {
  return (
    <nav className="text-white mb-5">
      <ul className="flex justify-around">
        <li>
          <DestinationNavbarAnchor
            onClick={onClick}
            destinationText={destinationNameArr[0]}
          />
        </li>
        <li>
          <DestinationNavbarAnchor
            onClick={onClick}
            destinationText={destinationNameArr[1]}
          />
        </li>
        <li>
          <DestinationNavbarAnchor
            onClick={onClick}
            destinationText={destinationNameArr[2]}
          />
        </li>
        <li>
          <DestinationNavbarAnchor
            onClick={onClick}
            destinationText={destinationNameArr[3]}
          />
        </li>
      </ul>
    </nav>
  )
}

export default DestinationNavbar
