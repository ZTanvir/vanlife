import sitOnVanImg from "../../assets/sitOnVan.png";
import Button from "../../Components/Button";
import styles from "../../styles/pages/About/mainsection.module.css";
import { Link } from "react-router-dom";

const MainSection = () => {
  return (
    <div className={styles.aboutPageInfoContainer}>
      <div className={styles.aboutPageInfo}>
        <section className={styles.aboutPageInformation}>
          <h2 className={styles.infoTitle}>
            Don’t squeeze in a sedan when you could relax in a van.
          </h2>
          <div className={styles.descriptionContainer}>
            <p>
              Our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch. (Hitch costs extra
              😉)
            </p>
            <br />
            <p>
              Our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </p>
          </div>
        </section>
        <section className={styles.exploreVanContainer}>
          <h3>Your destination is waiting.</h3>
          <h4>Your van is ready.</h4>
          <Link to="/vans">
            <Button
              text="Explore our vans"
              bgColor="#161616"
              btnColor="white"
              hoverColor="#1D1C1C"
            />
          </Link>
        </section>
      </div>

      <img
        className={styles.aboutPageImg}
        src={sitOnVanImg}
        alt="A person is sitting on van and enjoying the night sky"
      />
    </div>
  );
};
export default MainSection;
