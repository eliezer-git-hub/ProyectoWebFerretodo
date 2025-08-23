import React from 'react'
import cat1 from '../image/CATEGORIAS/CablesCat.png'
import cat2 from '../image/CATEGORIAS/HerramientasCat.png'
import cat3 from '../image/CATEGORIAS/pinturaCat.png'
import { Link } from 'react-router-dom'
export const ContendCategoria = () => {
    const itemcat=[
        {   img:cat1,
            nombre:'ELECTRICIDAD Y CABLES',
            url:'/categorias/cables'
        },
        {   img:cat2,
            nombre:'HERRAMIENTAS Y MAQUINAS',
            url:'/categorias/herramienta'
        },
        {
            img:cat3,
            nombre:'PINTURAS Y BROCHAS',
            url:'/categorias/pintura'
        }
    ]
  return (
    <section className='categoria'>
            <h2>Nuestras Categorías</h2>
            <h5>Te damos la bienvenida a nuestras categorías</h5>
            <article>
            {
                itemcat.map((item,index)=>(
                    <div key={index}>
                        <img src={item.img} alt="" />
                        <h1>{item.nombre}</h1>
                        <Link to={item.url} className='linkcat'>Click Aquí</Link>
                    </div>
                ))
            }   
            </article>
    </section>
  )
}
