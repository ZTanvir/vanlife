import styles from "../styles/components/footer.module.css";
const Footer = ({ text }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.footerContent}>
        {/* HTML Copyright Symbol */}
        <span>{String.fromCodePoint(169)}</span>
        {currentYear} {text}
      </p>
    </footer>
  );
};
export default Footer;
