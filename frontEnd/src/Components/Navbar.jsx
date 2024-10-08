import styles from "../styles/components/navbar.module.css";
import { NavLink } from "react-router-dom";
import vanlifeLogo from "../assets/logo.png";

const Navbar = ({ pagesList }) => {
  return (
    <nav className={styles.navContainer}>
      <ul>
        <li className={styles.homepage}>
          <NavLink to="/">
            <img src={vanlifeLogo} alt="vanlife logo" />
          </NavLink>
        </li>
        {pagesList.map((page) => (
          <li key={page.id}>
            <NavLink
              to={`/${page.name.toLowerCase()}`}
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "",
                };
              }}
            >
              {page.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
