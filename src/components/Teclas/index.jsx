import React from 'react'

export function Teclas(props) {
const subirPokemon = ()=>{
  let pokemonUp = props.infoPokemon.id + 1
  console.log(pokemonUp)
  props.setPokemon(pokemonUp)
}
const bajarPokemon = ()=>{
  let pokemonDown = props.infoPokemon.id - 1
  console.log(pokemonDown)
  props.setPokemon(pokemonDown)
}

  return (
    <div className='teclas-flechas'>
      <div></div>
      <div></div>
      <div onClick={subirPokemon}></div>
      <div onClick={bajarPokemon}></div>
  </div>
  )
}
