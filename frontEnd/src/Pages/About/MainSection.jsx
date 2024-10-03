import sitOnVanImg from "../../assets/sitOnVanImg.png";
import Button from "../../Components/Button";
import styles from "../../styles/pages/mainsection.module.css";

const MainSection = () => {
  return (
    <div>
      <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
      <img
        src={sitOnVanImg}
        alt="A person is sitting on van and enjoying the night sky"
      />
      <p>
        Our mission is to enliven your road trip with the perfect travel van
        rental. Our vans are recertified before each trip to ensure your travel
        plans can go off without a hitch. (Hitch costs extra 😉)
      </p>
      <p>
        Our team is full of vanlife enthusiasts who know firsthand the magic of
        touring the world on 4 wheels.
      </p>
      <div>
        <p>Your destination is waiting. Your van is ready.</p>
        <Button
          text="Explore our vans"
          bgColor="#161616"
          btnColor="white"
          hoverColor="#1D1C1C"
        />
      </div>
    </div>
  );
};
export default MainSection;
