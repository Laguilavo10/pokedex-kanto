import React from "react";
import "../../styles/PanelSecundario.css";

export function PokedexPanelSecundario({infoPokemon, children}) {
  let height = infoPokemon.height / 10
  let weight = infoPokemon.weight / 10
  return (
    <section className="pokedex-panel-dos">
      <div className="pantalla">
        {children}
      </div>
      <div className="btns-azules">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="otras-teclas">
        <div className="tcl-blancas">
          <div></div>
          <div></div>
        </div>
        <div className="tcl-varios">
          <div>
            <div></div>
            <div></div>
          </div>
          <div></div>
        </div>
        <div className="tcl-negras">
          <div>Height <span>{height} M</span></div>
          <div>Weight <span>{weight}  K</span></div>
        </div>
      </div>
    </section>
  );
}
