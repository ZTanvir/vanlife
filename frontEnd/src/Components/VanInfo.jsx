import styles from "../styles/components/vaninfo.module.css";
const VanInfo = ({ vanImgSrc, name, price, type }) => {
  return (
    <div className={styles.allVansInformation}>
      <img src={vanImgSrc} alt={name} />
      <div className={styles.VanNamePrice}>
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <div className={styles.vanType}>{type}</div>
    </div>
  );
};
export default VanInfo;
