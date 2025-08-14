import React, { useEffect, useState } from "react";

const MemoryContainer = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    let isMounted = true;
    let controller = new AbortController();
    async function fetchPokemon() {
      try {
        if (isMounted) {
          const response = await fetch("https://pokeapi.co/api/v2/pokemon", {
            signal: controller.signal,
          });
          const data = await response.json();

          const pokemonData = await Promise.all(data.results.map)(
            async (pokemonItem) => {
              const res = await fetch(pokemonItem.url, {
                signal: controller.signal,
              });
              const details = await res.json();
              return {
                name: details.name,
                image: details.sprites.other["official_artwork"].front_default,
                id: details.id,
              };
            }
          );
          setPokemons(pokemonData);
        }
      } catch (error) {
        console.error("Error occured: ", error.message);
      } finally {
        isMounted = false;
      }
    }
    fetchPokemon();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);
  return (
    <div>
      <h1>MemoryContainer</h1>
      <MemoryCard />
    </div>
  );
};

export default MemoryContainer;

function MemoryCard() {
  return (
    <div>
      <h1>Memory Card</h1>
    </div>
  );
}
