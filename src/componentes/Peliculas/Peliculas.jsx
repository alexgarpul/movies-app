import React from 'react'
import PeliculasTarjetas from '../PeliculasTarjetas/PeliculasTarjetas'
import './Peliculas.css'


const peliculasInfo=[
  {
    id:"1",
    name:"Thor",
    urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
  },
  {
    id:"2",
    name:"Thor",
    urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
  },
  {
    id:"3",
    name:"Thor",
    urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
  },
  {
    id:"4",
    name:"Thor",
    urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
  },
  {
    id:"5",
    name:"Thor",
    urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
  },
]

const Peliculas = () => {
  return (
    <div className='contenedor-peliculas'>
      {
        peliculasInfo.map(pelicula=> (
          <PeliculasTarjetas url={pelicula.urlImagen} name={pelicula.name}/>
        ))
      }

    </div>
  );
}

export default Peliculas;
