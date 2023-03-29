const DestinationNavbarAnchor = ({ onClick, destinationText, id }) => {
  return (
    <a
      href="#"
      onClick={onClick}
      id={id}
      className="pb-4 text-3xl hover:opacity-75"
    >
      {destinationText}
    </a>
  )
}

export default DestinationNavbarAnchor
