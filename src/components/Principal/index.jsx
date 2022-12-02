import React from 'react'
import Pokeball from '../../assets/icons8-pokeball-48.png'
import '../../styles/Principal.css'

export  function Principal({infoPokemon}) {
  console.log(infoPokemon)
  let img = infoPokemon.sprites.other.dream_world.front_default || infoPokemon.sprite
  let name = infoPokemon.name
  name = name.toUpperCase()

  return (
    <>
    <div className='principal'>
      <div className='pokemon-order'>
        <img src={Pokeball} alt="" />
        <p>{infoPokemon.id}</p> 
      </div>
      <img src={img} alt={infoPokemon.name} className='img-pokemon'/>
      <p className='nombre-pokemon'>{name}</p>
    </div>
    </>
  )
}
