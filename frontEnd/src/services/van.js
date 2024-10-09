import axios from "axios";
const baseUrl = import.meta.env.VITE_SERVER_URL;

const getAllVansData = async () => {
  const response = await axios.get(`${baseUrl}/api/vans`);
  const data = await response.json();
  return data;
};

export default { getAllVansData };
