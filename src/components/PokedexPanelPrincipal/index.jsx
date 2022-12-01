import React from 'react'
import '../../styles/PanelPrincipal.css'

export function PokedexPanelPrincipal (){
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
        </div>
      </article>
      <div className='teclas'>
        <div className='circulo-inferior'></div>

        <div>
          <div className='luces-inferior'>
            <div></div>
            <div></div>
          </div>
          <div className='verde-inferior'></div>
        </div>
        <div className='teclas-flechas'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  )
}
