import React from 'react'

export  function Buscador({setPokemon}) {
  // console.log(setPokemon)

  const busqueda = (event)=>{
    event.preventDefault()
    setPokemon(event.target[0].value)
  }
  return (
    <form className='search-container' onSubmit={busqueda}>
        <div className='input-search'>
          <img src="https://img.icons8.com/ios-glyphs/30/ffffff/search--v1.png" alt="" />
          <input type="text" placeholder='Buscar'/>
        </div>
        <button>ToDo</button>
      </form>
  )
}
