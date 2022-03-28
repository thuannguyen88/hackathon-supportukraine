// import { Link } from "react-router-dom";
// import { BiHomeAlt } from "react-icons/bi";
import "./index.css";

function Header(props) {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">{props.title}</h1>
      {/* <Link
        style={{ textDecoration: "none", color: "black" }}
        to="/userprofile"
      > */}
      {/* <BiHomeAlt size={28} />
      </Link> */}
    </nav>
  );
}

export default Header;
