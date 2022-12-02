import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Buscador } from "./components/Buscador";
import { PokedexPanelPrincipal } from "./components/PokedexPanelPrincipal";
import { PokedexPanelSecundario } from "./components/PokedexPanelSecundario";
import { Principal } from "./components/Principal";
import { Teclas } from "./components/Teclas";
import { Secundario } from "./components/Secundario";
import { WhosThatPokemon } from "./whosThatPokemon";
import "./index.css";

function App() {
  const [pokemon, setPokemon] = useState("");
  const [infoPokemon, setInfoPokemon] = useState("");
  const [loading, setLoading] = useState(true);
  // const [whoPokemon, setWhoPokemon] = useState(false);

  useEffect(() => {
    const API_URL = !pokemon
      ? `https://pokeapi.co/api/v2/pokemon/bulbasaur`
      : `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        // setWhoPokemon(false);
        setInfoPokemon(data);
        setLoading(false);
      })
      .catch((a) => {
        let uwu = `SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON`;
        a == uwu && setInfoPokemon(WhosThatPokemon);
      });
  }, [pokemon]);
  return (
    <>
      <Header></Header>

      <Buscador setPokemon={setPokemon} />
      <main className="main">
        {!loading && (
          <PokedexPanelPrincipal>
            <Principal infoPokemon={infoPokemon} />
            <Teclas infoPokemon={infoPokemon} setPokemon={setPokemon} />
          </PokedexPanelPrincipal>
        )}

        {!loading && (
          <PokedexPanelSecundario infoPokemon={infoPokemon}>
            <Secundario infoPokemon={infoPokemon}></Secundario>
          </PokedexPanelSecundario>
        )}
      </main>
    </>
  );
}

export default App;
