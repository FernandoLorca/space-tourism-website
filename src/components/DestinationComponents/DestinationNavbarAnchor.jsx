const DestinationNavbarAnchor = ({ onClick, destinationText }) => {
  return (
    <a href="#" onClick={onClick} className="pb-4 text-3xl hover:opacity-75">
      {destinationText.toUpperCase()}
    </a>
  )
}

export default DestinationNavbarAnchor
