import axios from "axios";
const baseUrl = import.meta.env.VITE_SERVER_URL;

const getAllVansData = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/vans`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.error("Error on getting all van information", error.message);
  }
};

export default { getAllVansData };
