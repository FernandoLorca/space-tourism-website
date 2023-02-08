import DestinationNavbarAnchor from "./DestinationNavbarAnchor";

const DestinationNavbar = ({ onClick, destinationName }) => {
  return (
    <nav className="text-white mb-5">
      <ul className="flex justify-around">
        <li>
          <DestinationNavbarAnchor onClick={onClick} destinationName="MOON" />
        </li>
        <li>
          <DestinationNavbarAnchor onClick={onClick} destinationName="MARS" />
        </li>
        <li>
          <DestinationNavbarAnchor onClick={onClick} destinationName="EUROPA" />
        </li>
        <li>
          <DestinationNavbarAnchor onClick={onClick} destinationName="TITAN" />
        </li>
      </ul>
    </nav>
  );
};

export default DestinationNavbar;
