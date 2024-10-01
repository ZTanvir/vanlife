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
    </>
  );
};
export default Vanlife;
