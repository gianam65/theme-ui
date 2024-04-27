import "./home-page.scss";
import qrCode from "../../assets/images/test.png";

const HomePage = () => {
  return (
    <div>
      This is home page
      <img src={qrCode} alt="" />
    </div>
  );
};

export default HomePage;
