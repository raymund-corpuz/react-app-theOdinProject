import React, { useEffect, useState } from "react";

const MemoryCard = () => {
  const [pokemon, setPokemon] = useState({ name: "", image: "" });
  const [pokemonCollection, setPokemonCollection] = useState([]);

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
      }
    }

    fetchPokemon();
  }, []);
  return (
    <div>
      <h1>Memory Card</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {pokemonCollection.map((pokemon, index) => (
          <RenderCard name={pokemon.name} key={index} img={pokemon.image} />
        ))}
      </div>
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
        padding: "1rem",
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
