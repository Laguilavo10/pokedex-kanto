import React from "react";
import "../../styles/Secundario.css";

export function Secundario({ infoPokemon }) {
  let stats = infoPokemon.stats.map((a) => ({
    stat: a.stat.name.split("-").join(" "),
    value: a.base_stat,
  }));
  stats.shift();

  return (
    <div className="stats-container">
      {stats.map((a) => {
        let porcentaje = a.value >= 100 ? 100 : a.value;
        return (
          <div className="stats-pokemons" key={a.stat}>
            <div></div>
            <div style={{ height: `${porcentaje}%` }}>
              <p>{a.value}</p>
            </div>
            <div>{a.stat}</div>
          </div>
        );
      })}
    </div>
  );
}
