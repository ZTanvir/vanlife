import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import MainSection from "./MainSection";
import styles from "../../styles/pages/Home/homepage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
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
export default HomePage;
