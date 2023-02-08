const DestinationNavbarAnchor = ({ onClick, destinationName }) => (
  <a href="#" onClick={onClick} className="pb-4 text-3xl hover:opacity-75">
    {destinationName}
  </a>
);

export default DestinationNavbarAnchor;
