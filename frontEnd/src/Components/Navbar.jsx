import styles from "../styles/components/navbar.module.css";
import vanlifeLogo from "../assets/logo.png";

const Navbar = ({ pagesList }) => {
  return (
    <nav className={styles.navContainer}>
      <ul>
        <li className={styles.homepage}>
          <img src={vanlifeLogo} alt="vanlife logo" />
        </li>
        {pagesList.map((page) => (
          <li key={page.id}>{page.name}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
