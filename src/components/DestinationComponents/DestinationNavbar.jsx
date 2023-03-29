import DestinationNavbarAnchor from './DestinationNavbarAnchor'

const DestinationNavbar = ({ onClick, destinationNameArr, activeIndex }) => {
  return (
    <nav className="text-white mb-5">
      <ul className="flex justify-around">
        {destinationNameArr.map((destination, index) => (
          <li
            key={index}
            className={index === activeIndex ? 'border-b-2 pb-2' : ''}
          >
            <DestinationNavbarAnchor
              onClick={onClick}
              destinationText={destination}
              id={index + 1}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default DestinationNavbar
