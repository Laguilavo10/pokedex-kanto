import React from 'react'
import arrow from '../../assets/arrow.png'

export function Teclas(props) {
const subirPokemon = ()=>{
  let pokemonUp = props.infoPokemon.id == '?' ? 1 : props.infoPokemon.id + 1
  props.setPokemon(pokemonUp)
}
const bajarPokemon = ()=>{
  let pokemonDown = props.infoPokemon.id == '?' ? 1 : props.infoPokemon.id - 1
  props.setPokemon(pokemonDown)
}

  return (
    <div className='teclas-flechas'>
      <div><img src={arrow} alt="" /></div>
      <div><img src={arrow} alt="" /></div>
      <div onClick={subirPokemon}><img src={arrow} alt="" /></div>
      <div onClick={bajarPokemon}><img src={arrow} alt="" /></div>
  </div>
  )
}
