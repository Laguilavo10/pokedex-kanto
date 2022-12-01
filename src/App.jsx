import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { PokedexPanelPrincipal } from "./components/PokedexPanelPrincipal";
import { PokedexPanelSecundario } from "./components/PokedexPanelSecundario";
import './index.css'

function App() {
  const [pokemons, setPokemons] = useState("");
  const [loading, setLoading] = useState(true);
  // let pokemon
  // useEffect(() => {
  //   const API_URL = "https://pokeapi.co/api/v2/pokedex/kanto/";

  //   fetch(API_URL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.pokemon_entries[0].pokemon_species.url)
  //     });
  // }, []);

  return (
    <>
      <Header></Header>
      <main className="main">
        <PokedexPanelPrincipal></PokedexPanelPrincipal>
        <PokedexPanelSecundario></PokedexPanelSecundario>


      </main>
      {/* {!loading && <h1>{pokemons.results[0].name}</h1>}FF */}
    </>
  );
}

export default App;
