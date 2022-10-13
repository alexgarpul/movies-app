import React from 'react'
import './PeliculasTarjetas.css'

const PeliculasTarjetas = (props) => {
  return (
    <div className='tarjeta'>

      <img src={props.url} />
      <h2>{props.name}</h2>
      <p>Esta pelicula es buena</p>

    </div>
  )
}

export default PeliculasTarjetas