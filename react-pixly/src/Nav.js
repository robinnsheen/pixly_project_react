import { Link, NavLink } from "react-router-dom";

/** Navigation bar for site. Shows up on every page.
 *
 * Rendered by App.
 */

function Nav() {
  console.debug("Navigation");

  return (
    <nav className="Navigation navbar navbar-expand-md">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Pixly
        </Link>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item me-4">
            <NavLink className="nav-link" to="/upload">
              Upload
            </NavLink>
          </li>
          <li className="nav-item me-4">
            <NavLink className="nav-link" to="/edit">
              Edit
            </NavLink>
          </li>
          <li className="nav-item me-4">
            <NavLink className="nav-link" to="/pictures">
              Gallery
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
