import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const MemoryContainer = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  useEffect(() => {
    let isMounted = true;
    let controller = new AbortController();

    async function fetchPokemon() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=20",
          { signal: controller.signal }
        );
        const data = await response.json();

        const pokemonData = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url, { signal: controller.signal });
            const details = await res.json();
            return {
              name: details.name,
              image: details.sprites.other["official-artwork"].front_default,
              id: details.id,
            };
          })
        );

        if (isMounted) {
          setPokemons(pokemonData);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Error Occured", error);
        }
      } finally {
        if (isMounted) {
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        }
      }
    }
    fetchPokemon();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  //   useEffect(() => {
  //     let isMounted = true;
  //     let controller = new AbortController();
  //     async function fetchPokemon() {
  //       try {
  //         if (isMounted) {
  //           const response = await fetch("https://pokeapi.co/api/v2/pokemon", {
  //             signal: controller.signal,
  //           });
  //           const data = await response.json();

  //           const pokemonData = await Promise.all(data.results.map)(
  //             async (pokemonItem) => {
  //               const res = await fetch(pokemonItem.url, {
  //                 signal: controller.signal,
  //               });
  //               const details = await res.json();
  //               return {
  //                 name: details.name,
  //                 image: details.sprites.other["official_artwork"].front_default,
  //                 id: details.id,
  //               };
  //             }
  //           );
  //           setPokemons(pokemonData);
  //         }
  //       } catch (error) {
  //         console.error("Error occured: ", error.message);
  //       } finally {
  //         isMounted = false;
  //       }
  //     }
  //     fetchPokemon();

  //     return () => {
  //       isMounted = false;
  //       controller.abort();
  //     };
  //   }, []);

  function handleShuffle(id) {
    const isDuplicated = selected.includes(id);

    if (isDuplicated) {
      setCurrentScore(0);
      setSelected([]);
      alert("GAME OVER!!!");
      confirm("DO YOU WANT TO TRY AGAIN ?");
    } else {
      const newScore = currentScore + 1;
      setCurrentScore(newScore);

      if (newScore > highestScore) {
        setHighestScore(newScore);
      }
      setSelected((prevSelected) => [...prevSelected, id]);
    }

    setPokemons((prevPokemon) => {
      let shufflePokemon = [...prevPokemon];
      let currentIndex = shufflePokemon.length;
      let randomIndex;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [shufflePokemon[currentIndex], shufflePokemon[randomIndex]] = [
          shufflePokemon[randomIndex],
          shufflePokemon[currentIndex],
        ];
      }
      return shufflePokemon;
    });
  }

  return (
    <div>
      <h1>MemoryContainer</h1>
      <h3 style={{ margin: "0.5rem" }}>Current Score: {currentScore}</h3>
      <h3 style={{ margin: "0.5rem" }}>Highest Score: {highestScore}</h3>

      {!isLoading ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {pokemons.map((pokemon) => (
            <MemoryCard
              name={pokemon.name}
              id={pokemon.id}
              key={pokemon.id}
              image={pokemon.image}
              onShuffle={handleShuffle}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default MemoryContainer;

function MemoryCard({ name, id, image, onShuffle }) {
  const properCase = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "0.5rem",
        margin: "1rem",
        borderRadius: "0.5rem",
        cursor: "pointer",
      }}
      onClick={() => onShuffle(id)}
    >
      <h4 style={{ margin: "0", textAlign: "center" }}>
        {" "}
        <span>{id}.</span> {properCase}
      </h4>
      <img src={image} alt={name} width={"100px"} />
    </div>
  );
}
