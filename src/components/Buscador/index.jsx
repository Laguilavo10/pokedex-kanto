import React from 'react'

export  function Buscador({setPokemon}) {
  // console.log(setPokemon)

  const busqueda = (event)=>{
    event.preventDefault()
    let pokemonSearched = event.target[0].value.toLowerCase()
    if (pokemonSearched === '') {
      return
    }
    setPokemon(pokemonSearched)
  }

  return (
    <form className='search-container' onSubmit={busqueda}>
        <div className='input-search'>
          <img src="https://img.icons8.com/ios-glyphs/30/ffffff/search--v1.png" alt="" />
          <input type="text" placeholder='Buscar'/>
        </div>
        <button>Search</button>
      </form>
  )
}
