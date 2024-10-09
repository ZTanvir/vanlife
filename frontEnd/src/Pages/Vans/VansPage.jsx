import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import VanService from "../../services/van";
import VanInfo from "../../Components/VanInfo";
import styles from "../../styles/pages/Vans/vanspage.module.css";

const VansPage = ({}) => {
  const [vansData, setVansData] = useState([]);

  useEffect(() => {
    const getVanData = async () => {
      try {
        const vansInformation = await VanService.getAllVansData();
        console.log("van info", vansInformation);
        setVansData(vansInformation);
      } catch (error) {
        console.error(error.message);
      }
    };
    getVanData();
  }, []);

  return (
    <div className={styles.vansPageContainer}>
      <header>
        <Navbar
          pagesList={[
            { name: "About", id: crypto.randomUUID() },
            { name: "Vans", id: crypto.randomUUID() },
          ]}
        />
      </header>
      <main>
        {vansData.length > 0
          ? vansData.map((van) => (
              <VanInfo
                key={van.id}
                vanImgSrc={van.path}
                name={van.name}
                price={van.rent}
                type={van.type}
              />
            ))
          : null}
      </main>

      <footer>
        <Footer text="VANLIFE" />
      </footer>
    </div>
  );
};
export default VansPage;
