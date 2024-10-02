import Button from "./Button";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Vanlife = () => {
  return (
    <>
      <Navbar
        pagesList={[
          { name: "About", id: crypto.randomUUID() },
          { name: "Vans", id: crypto.randomUUID() },
        ]}
      />
      <Footer text="VANLIFE" />
      <Button text="Find your van" bgColor="red" btnColor="white" />
    </>
  );
};
export default Vanlife;
