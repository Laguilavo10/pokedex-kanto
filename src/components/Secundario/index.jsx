import React from 'react'
import '../../styles/Secundario.css'


export function Secundario({infoPokemon}) {
  let stats = infoPokemon.stats.map((a)=>({stat:a.stat.name.split('-').join(' '), value:a.base_stat,}))
  stats.shift()
  return (
    <div className='stats-container'>
      {stats.map((a)=>(
          <div className='stats-pokemons'>

            <div style={{height:`${a.value}%`}}><p>{a.value}</p></div>
            <div>{a.stat}</div>
          </div>


      ))}

    </div>
  )
}
