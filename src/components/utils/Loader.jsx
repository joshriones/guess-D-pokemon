import pokemonBall from "../../assets/images/pngwing.com.png";
import "./Loader.css";

function Loader() {
  return (
    <div loader-container="true">
      <img src={pokemonBall} alt="pokeball" className="loader-img" />
    </div>
  );
}

export default Loader;
