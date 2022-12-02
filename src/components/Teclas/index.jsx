import {useEffect} from 'react'
import arrow from '../../assets/arrow.png'

export function Teclas(props) {
  // document.addEventListener('keyup', (event)=>{
  //   if (event.code == 'KeyW') {
  //       subirPokemon()
  //   }else if(event.code == 'KeyS'){
  //       bajarPokemon()
  //   }
  //   console.log(event)
  // })

function subirPokemon(){
  let pokemonUp = props.infoPokemon.id == '?' ? 1 :( props.infoPokemon.id + 1)
  props.setPokemon(pokemonUp)
}
function bajarPokemon(){
  let pokemonUp = props.infoPokemon.id == '?' ? 1 : (props.infoPokemon.id - 1)
  props.setPokemon(pokemonUp)
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
