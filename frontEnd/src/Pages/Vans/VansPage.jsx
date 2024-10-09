import { useEffect, useState } from "react";
import VanService from "../../services/van";
import VanInfo from "../../Components/VanInfo";

const VansPage = ({}) => {
  const [vansData, setVansData] = useState([]);

  useEffect(() => {
    const getVanData = async () => {
      try {
        const vansInformation = await VanService.getAllVansData();
        console.log("van info", vansInformation);
        setVansData(vansInformation);
      } catch (error) {}
    };
    getVanData();
  }, []);

  return (
    <div>
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
    </div>
  );
};
export default VansPage;
