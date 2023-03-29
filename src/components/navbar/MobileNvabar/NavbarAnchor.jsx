import { NavLink } from "react-router-dom"

const NavbarAnchor = ({ number, text, path }) => {
  return (
    <li className="mb-16">
      <div className="flex items-center">
        <p className="font-bold w-12">{number}</p>
        <NavLink to={path} className="hover:opacity-75">
          {text}
        </NavLink>
      </div>
    </li>
  )
}

export default NavbarAnchor
