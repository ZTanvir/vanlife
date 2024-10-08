import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import AboutPage from "../Pages/About/AboutPage";

const Vanlife = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Vanlife;
