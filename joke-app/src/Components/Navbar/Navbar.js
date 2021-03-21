import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <NavLink to="/" className="nav-button slide-in-bck-center">
        Joke
      </NavLink>
      <NavLink to="/input" className="nav-button slide-in-bck-center">
        New Joke
      </NavLink>
    </nav>
  );
};

export default Navbar;
