import styles from "../styles/components/vaninfo.module.css";

const VanInfo = ({ vanImgSrc, name, price, type }) => {
  const baseUrl = import.meta.env.VITE_SERVER_URL;

  return (
    <figure className={styles.allVansInformation}>
      <img src={`${baseUrl}/api/${vanImgSrc}`} alt={name} />
      <figcaption className={styles.vanNamePrice}>
        <span className={styles.vanName}>{name}</span>
        <span className={styles.vanPricePerDay}>
          <span className={styles.vanPrice}>${price}</span>
          <span>/day</span>
        </span>
      </figcaption>
      <div data-type={type} className={styles.vanType}>
        {type}
      </div>
    </figure>
  );
};
export default VanInfo;
