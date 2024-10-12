import VanInfo from "../../Components/VanInfo";
import Button from "../../Components/Button";
import VanService from "../../services/van";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import styles from "../../styles/pages/Van/vanpage.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const VanPage = ({}) => {
  const [vanData, setVanData] = useState([]);
  const vanId = useParams();

  useEffect(() => {
    const { id } = vanId;
    const getVanData = async () => {
      try {
        const vanInfo = await VanService.getSingleVanData(id);
        // if van information not found
        // this {message: 'Van information not found in the db'}
        setVanData([{ ...vanInfo }]);
      } catch (error) {
        console.error(error.message);
      }
    };
    getVanData();
  }, []);

  return (
    <div className={styles.vanPage}>
      <header>
        <Navbar
          pagesList={[
            { name: "About", id: crypto.randomUUID() },
            { name: "Vans", id: crypto.randomUUID() },
          ]}
        />
      </header>
      <main className={styles.vanInformation}>
        {vanData.length > 0 &&
          (vanData[0].message ? (
            <h1>Van not found</h1>
          ) : (
            <VanInfo
              vanImgSrc={vanData[0].path}
              name={vanData[0].name}
              price={vanData[0].rent}
              type={vanData[0].type}
            />
          ))}
        <Button
          text="Rent this van"
          bgColor="#FF8C38"
          btnColor="white"
          hoverColor="#ffac70"
        />
      </main>

      <footer>
        <Footer text="VANLIFE" />
      </footer>
    </div>
  );
};
export default VanPage;
