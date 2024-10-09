import { useEffect, useState } from "react";
import VanInfo from "../../Components/VanInfo";

const VansPage = ({}) => {
  const [vansData, setVansData] = useState([]);

  useEffect(() => {
    const getVanData = async () => {};
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
