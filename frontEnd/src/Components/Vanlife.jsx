import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import AboutPage from "../Pages/About/AboutPage";
import VansPage from "../Pages/Vans/VansPage";
import VanPage from "../Pages/Van/VanPage";

const Vanlife = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/vans" element={<VansPage />} />
          <Route path="/vans/:id" element={<VanPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Vanlife;
