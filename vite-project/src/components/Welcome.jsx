import Sammy from "../img/sam.jpeg";
import Girl from "../img/Nhu.jpg";
import "../css/main.css";

export default function Welcome() {
  return (
    <>
      <div className="wrapper">
        <h1>Hi Khanh Nhu</h1>
        <p>To be the beautyful girl in the world!</p>
        <img src={Girl} alt="girl photo" height={200} />
      </div>
    </>
  );
}
