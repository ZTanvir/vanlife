import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import MainSection from "./MainSection";
import styles from "../../styles/pages/About/aboutpage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.aboutPageContainer}>
      <header>
        <Navbar
          pagesList={[
            { name: "About", id: crypto.randomUUID() },
            { name: "Vans", id: crypto.randomUUID() },
          ]}
        />
      </header>

      <main>
        <MainSection />
      </main>

      <footer>
        <Footer text="VANLIFE" />
      </footer>
    </div>
  );
};
export default AboutPage;
