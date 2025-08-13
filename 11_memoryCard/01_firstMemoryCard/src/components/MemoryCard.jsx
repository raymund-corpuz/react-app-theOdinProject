import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const MemoryCard = () => {
  const [pokemonCollection, setPokemonCollection] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [highestScore, setHighestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=60"
        );
        const data = await response.json();

        const pokemonData = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const details = await res.json();

            const name = details.name;
            const image =
              details.sprites.other["official-artwork"].front_default;
            const newPokemon = { name: name, image: image };
            setPokemonCollection((prevCollection) => [
              ...prevCollection,
              newPokemon,
            ]);
          })
        );
      } catch (error) {
        console.error("Error occured: ", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    }

    fetchPokemon();
  }, []);
  return (
    <div style={{ margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Project: Memory Card</h1>
      <div
        style={{
          display: "flex",
        }}
      >
        <h3 style={{ marginRight: "2rem" }}>Current Score:{currentScore}</h3>
        <h3>Highest Score: {highestScore}</h3>
      </div>
      {!isLoading ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {pokemonCollection.map((pokemon, index) => (
            <RenderCard name={pokemon.name} key={index} img={pokemon.image} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default MemoryCard;

function RenderCard({ name, img }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "0.5rem",
        padding: " 1rem ",
        borderRadius: "0.5rem",
      }}
    >
      <h3 style={{ textAlign: "center" }}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h3>
      <img src={img} alt={name} width={"100px"} />
    </div>
  );
}
