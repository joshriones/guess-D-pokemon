import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/utils/Loader";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import PokemonData from "./components/PokemonData/PokemonData";

function App() {
  const [pokemons, setPokemons] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hint, setHint] = useState(false);
  const [pokemonInput, setPokemonInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const [random, setRandom] = useState(
    Math.floor(Math.random() * (150 - 1 + 1)) + 1
  );

  function handleRandom() {
    setRandom(() => Math.floor(Math.random() * (150 - 1 + 1)) + 1);
    setIsCorrect(false);
    setPokemonInput("");
    setHint(false);
  }

  function handleHint() {
    setHint(() => !hint);

    setTimeout(() => {
      setHint(() => false);
    }, 10000);
  }

  function handlePokemonInput(e) {
    e.preventDefault();

    setPokemonInput(e.target.value);
  }

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          // "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50"
          `https://pokeapi.co/api/v2/pokemon/${random}`
        );

        if (!res.ok) throw new Error("Failed to retrieve data");

        const data = await res.json();
        localStorage.setItem("pokemonData", JSON.stringify(data));

        setPokemons(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemon();
  }, [random]);

  useEffect(() => {
    const storedData = localStorage.getItem("pokemonData");

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setPokemons(parsedData);
    }
  }, []);

  console.log(pokemons.name);

  return (
    <div className="wrapper">
      <Header />
      <div className="content-container">
        <Form
          handleRandom={handleRandom}
          handleHint={handleHint}
          pokemonInput={pokemonInput}
          handlePokemonInput={handlePokemonInput}
          pokemons={pokemons}
          isCorrect={isCorrect}
          setIsCorrect={setIsCorrect}
        />
        <PokemonData
          pokemons={pokemons}
          isLoading={isLoading}
          hint={hint}
          isCorrect={isCorrect}
        />
      </div>
    </div>
  );
}

export default App;
