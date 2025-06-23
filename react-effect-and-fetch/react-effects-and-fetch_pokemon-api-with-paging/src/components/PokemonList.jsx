import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0");

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [url]);

  return (
    <main>
      <button
        type='button'
        onClick={() => pokemon.previous && setUrl(pokemon.previous)}
        disabled={!pokemon.previous}
      >
        Previous Page
      </button>
      <button type='button' onClick={() => setUrl(pokemon.next)}>
        Next Page
      </button>
      <ul>
        {pokemon.results?.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
