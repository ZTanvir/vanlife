import styles from "../styles/components/button.module.css";
const Button = ({ text, bgColor, btnColor }) => {
  return (
    <button
      style={{ background: bgColor, color: btnColor }}
      className={styles.buttonContainer}
    >
      {text}
    </button>
  );
};
export default Button;
