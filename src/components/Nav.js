import { NavLink } from "react-router-dom";
import "../style/NavBar.css";
export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/commentaires">
              commentaires
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/tasks">
              tasks
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/users">
              Users
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
