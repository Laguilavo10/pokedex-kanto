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
  const [whoPokemon, setWhoPokemon] = useState(false);

  useEffect(() => {
    const API_URL = !pokemon
      ? `https://pokeapi.co/api/v2/pokemon/bulbasaur`
      : `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setWhoPokemon(false)
        setInfoPokemon(data)
        setLoading(false)
      })
      .catch((a)=>{
        let uwu = `SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON`
        console.log(typeof a, typeof uwu)
        a == uwu && setInfoPokemon(WhosThatPokemon)
      })
  }, [pokemon]);
  return (
    <>
      <Header></Header>

      <Buscador setPokemon={setPokemon} />
      
      {loading ? (
        <h1>paciencia</h1>
      ) : (
        <main className="main">
          <PokedexPanelPrincipal>
            <Principal infoPokemon={infoPokemon} />
            <Teclas infoPokemon={infoPokemon} setPokemon={setPokemon} />
          </PokedexPanelPrincipal>

          <PokedexPanelSecundario infoPokemon={infoPokemon}>
            {!loading && <Secundario infoPokemon={infoPokemon}></Secundario>}
          </PokedexPanelSecundario>
        </main>
      )}
    </>
  );
}

export default App;
