import { useRef } from "react";
import styles from "../styles/components/button.module.css";
const Button = ({ text, bgColor, btnColor, hoverColor }) => {
  const buttonEl = useRef(null);
  const handleMouseEnter = () => {
    buttonEl.current.style.backgroundColor = `${hoverColor}`;
  };
  const handleMouseLeave = () => {
    buttonEl.current.style.backgroundColor = `${bgColor}`;
  };
  return (
    <button
      ref={buttonEl}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ background: bgColor, color: btnColor }}
      className={styles.buttonContainer}
    >
      {text}
    </button>
  );
};
export default Button;
