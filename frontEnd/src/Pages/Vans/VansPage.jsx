import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import VanService from "../../services/van";
import VanInfo from "../../Components/VanInfo";
import styles from "../../styles/pages/Vans/vanspage.module.css";
import { Link } from "react-router-dom";

const VansPage = ({}) => {
  const [vansData, setVansData] = useState([]);

  useEffect(() => {
    const getVanData = async () => {
      try {
        const vansInformation = await VanService.getAllVansData();
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
              // got to /vans/id page
              <Link to={`${van.id}`} key={van.id}>
                <VanInfo
                  vanImgSrc={van.path}
                  name={van.name}
                  price={van.rent}
                  type={van.type}
                />
              </Link>
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
