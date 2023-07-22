import "./PokemonData.css";
import Loader from "../utils/Loader";
import pikachuIdle from "../../assets/images/hideanimation.gif";

const colours = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

function PokemonData({ pokemons, isLoading, hint, isCorrect }) {
  const type1 = pokemons?.types?.[0]?.type?.name;
  const type2 = pokemons?.types?.[1]?.type?.name;

  const ability1 = pokemons?.abilities?.[0]?.ability?.name;
  const ability2 = pokemons?.abilities?.[1]?.ability?.name;
  const ability3 = pokemons?.abilities?.[2]?.ability?.name;

  const type1Style = {
    backgroundColor: colours[type1],
    padding: "1rem 1rem",
    color: "white",
    borderRadius: "20px",
    fontSize: "1rem",
  };
  const type2Style = {
    backgroundColor: colours[type2],
    padding: "1rem 1rem",
    color: "white",
    borderRadius: "20px",
    fontSize: "1rem",
  };

  return (
    <div className="pokemonCard">
      <div className="card-img">
        {isLoading ? (
          <Loader />
        ) : (
          <img
            src={pokemons.sprites?.front_default}
            alt={pokemons.name}
            className={isCorrect ? "pokemon-img show-img" : "pokemon-img"}
          />
        )}
      </div>
      <div className="pokemon-data">
        <h1 className="pokemon-name">
          {isCorrect
            ? `${
                pokemons.name?.charAt(0).toUpperCase() + pokemons.name?.slice(1)
              }`
            : "???"}
        </h1>
        {hint || isCorrect ? (
          <>
            <h2 className="pokemon-type">
              Type:
              {type1 && (
                <span style={type1Style}>{`${type1.toUpperCase()}`}</span>
              )}
              {type2 && (
                <span style={type2Style}>{`${type2.toUpperCase()}`}</span>
              )}
            </h2>
            <h2 className="pokemon-abilities">
              Abilities:
              {ability1 && (
                <span>{`${
                  ability1[0].toUpperCase() + ability1.substr(1)
                }`}</span>
              )}
              {ability2 && (
                <span>{`${
                  ability2[0].toUpperCase() + ability2.substr(1)
                }`}</span>
              )}
              {ability3 && (
                <span>{`${
                  ability3[0].toUpperCase() + ability3.substr(1)
                }`}</span>
              )}
            </h2>
          </>
        ) : (
          <div className="hide-hint">
            <img
              src={pikachuIdle}
              alt="pikachu running"
              className="pickachu-idle-hint"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default PokemonData;
