import Button from "../../Components/Button";
import styles from "../../styles/pages/Home/mainsection.module.css";
import mountainImgL from "../../assets/mountainImage.png";
import { Link } from "react-router-dom";

const MainSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${mountainImgL})` }}
      className={styles.homeMainContainer}
    >
      <div className={styles.overLay}></div>
      <section className={styles.homePageInfoContainer}>
        <h2 className={styles.homePageInfoTitle}>
          You got the travel plans, we got the travel vans.
        </h2>
        <p className={styles.homePageInfoDescription}>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link className={styles.findYourVanLink} to="/vans">
          <Button
            text="Find your van"
            bgColor="#FF8C38"
            btnColor="#FFFFFF"
            hoverColor="#ff9f5a"
          />
        </Link>
      </section>
    </div>
  );
};
export default MainSection;
