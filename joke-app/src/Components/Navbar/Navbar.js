import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <NavLink to="/" className="nav-button">
        Home
      </NavLink>
      <NavLink to="/joke" className="nav-button">
        Joke
      </NavLink>
      <NavLink to="/thoughts" className="nav-button">
        My thoughts
      </NavLink>
      <NavLink to="/help" className="nav-button">
        Panic
      </NavLink>
    </nav>
  );
};

export default Navbar;
