const NavbarAnchor = ({ number, text }) => {
  return (
    <li className="mb-16">
      <div className="flex items-center">
        <p className="font-bold w-12">{number}</p>
        <a href="#" className="hover:opacity-75">
          {text}
        </a>
      </div>
    </li>
  )
}

export default NavbarAnchor
