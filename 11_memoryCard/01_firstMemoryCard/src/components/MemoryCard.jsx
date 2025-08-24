import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const MemoryCard = () => {
  const [pokemonCollection, setPokemonCollection] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [highestScore, setHighestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [selected, setSelected] = useState([]);

  // useEffect(() => {
  //   async function fetchPokemon() {
  //     try {
  //       const response = await fetch(
  //         "https://pokeapi.co/api/v2/pokemon?limit=20"
  //       );
  //       const data = await response.json();

  //       const pokemonData = await Promise.all(
  //         data.results.map(async (pokemon) => {
  //           const res = await fetch(pokemon.url);
  //           const details = await res.json();

  //           console.log(details);

  //           const name = details.name;
  //           const image =
  //             details.sprites.other["official-artwork"].front_default;
  //           const id = details.id;
  //           const newPokemon = { name: name, image: image, id: id };
  //           setPokemonCollection((prevCollection) => [
  //             ...prevCollection,
  //             newPokemon,
  //           ]);
  //         })
  //       );
  //     } catch (error) {
  //       console.error("Error occured: ", error);
  //     } finally {
  //       setTimeout(() => {
  //         setIsLoading(false);
  //       }, 1000);
  //     }
  //   }

  //   fetchPokemon();
  // }, []);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

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
          setPokemonCollection(pokemonData);
          console.log("Component Update");
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Error occured: ", error);
        }
      } finally {
        if (isMounted) {
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
          console.log("✅ Component Mounted");
        }
      }
    }

    fetchPokemon();
    return () => {
      isMounted = false;
      controller.abort();
      console.log("❌ Component Unmount");
    };
  }, []);

  // function handleShuffle(id) {
  //   setSelected((prevSelected) => {
  //     if (prevSelected.includes(id)) {
  //       setCurrentScore(0);
  //       return [];
  //     } else {
  //       setCurrentScore((prev) => {
  //         const newScore = prev + 1;
  //         setHighestScore((highest) => Math.max(highest, newScore));
  //         return newScore;
  //       });

  //       return [...prevSelected, id];
  //     }
  //   });
  //   // const mySet = new Set();
  //   // mySet.add(id);
  //   // const myArray = Array.from(mySet);
  //   // console.log(mySet);

  //   // myArray.filter((select) =>
  //   //   select !== id ? setCurrentScore((prev) => prev + 1) : setCurrentScore(0)
  //   // );
  //   // setSelected((prevSeleleted) => [...prevSeleleted, mySet]);

  //   let shufflePokemon = [...pokemonCollection];
  //   let currentIndex = shufflePokemon.length;
  //   let randomIndex;

  //   while (currentIndex !== 0) {
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex--;

  //     [shufflePokemon[currentIndex], shufflePokemon[randomIndex]] = [
  //       shufflePokemon[randomIndex],
  //       shufflePokemon[currentIndex],
  //     ];
  //   }

  //   setPokemonCollection(shufflePokemon);
  // }

  function handleShuffle(id) {
    const isDuplicated = selected.includes(id);

    if (isDuplicated) {
      setCurrentScore(0);
      setSelected([]);
      alert("GAME OVER!!!");
      confirm("Do you want try again?");
    } else {
      const newScore = currentScore + 1;
      setCurrentScore(newScore);

      if (newScore > highestScore) {
        setHighestScore(newScore);
      }

      setSelected((prevSelected) => [...prevSelected, id]);
    }

    setPokemonCollection((prevCollection) => {
      const shuffled = [...prevCollection];
      let currentIndex = shuffled.length;
      let randomIndex;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [shuffled[currentIndex], shuffled[randomIndex]] = [
          shuffled[randomIndex],
          shuffled[currentIndex],
        ];
      }

      return shuffled;
    });
  }

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
      {/* <button onClick={handleShuffle} style={{ padding: "0.5rem" }}>
        Shuffle
      </button> */}
      {!isLoading ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {pokemonCollection.map((pokemon) => (
            <RenderCard
              name={pokemon.name}
              key={pokemon.id}
              img={pokemon.image}
              id={pokemon.id}
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

export default MemoryCard;

function RenderCard({ name, img, id, onShuffle }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "0.5rem",
        padding: "1rem  ",
        borderRadius: "0.5rem",
      }}
      onClick={() => onShuffle(id)}
    >
      <h3 style={{ margin: "0" }}>{id}</h3>
      <h3 style={{ textAlign: "center", margin: "0" }}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h3>
      <img src={img} alt={name} width={"100px"} />
    </div>
  );
}
