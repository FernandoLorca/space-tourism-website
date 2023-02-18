import { Link } from "react-router-dom";

const TabletNavbarAnchor = ({ text, path }) => {
  return (
    <>
      <li className="pl-16">
        <Link to={path} href="#">
          {text}
        </Link>
      </li>
    </>
  );
};

export default TabletNavbarAnchor;
