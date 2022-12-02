import React from 'react'
import '../../styles/PanelPrincipal.css'
import '../../styles/TiposPokemon.css'

export function PokedexPanelPrincipal ({children, Teclas}){
  let tipos = children[0].props.infoPokemon.types.map((a)=>(a.type.name))
  return (
    <section className='pokedex-panel-uno'>
      <div className='panel1-arriba'>
        <div>
            <div className='circulo-azul'></div>
            <div className='circulos-colores'>
              <span className='rojo'></span>
              <span className='amarillo'></span>
              <span className='verde'></span>
            </div>
        </div>
        <div></div>
        <div></div>
      </div>
      <article className='panel1-info-container'>
        <div className='panel1-info'>
          {children[0]}
        </div>
      </article>
      <div className='teclas'>
        <div className='circulo-inferior'></div>

        <div>
          <div className='luces-inferior'>
            <div></div>
            <div></div>
          </div>
          <div className='verde-inferior'>
              {tipos.map((a)=>(<p className={a} key={a}>{a}</p>))}
          </div>
        </div>
        {children[1]}
      </div>
    </section>
  )
}
