import React from 'react'
import icono1 from '../image/INICIO/camion-de-reparto.png'
import icono2 from '../image/INICIO/devolucion-de-producto.png'
import icono3 from '../image/INICIO/billetera.png'
export const ArticleMenu = () => {
  return (
    <section className='Section-Inicio'>
        <h1>¿Cómo trabajamos en Ferretería FERRETODO?</h1>
        <article>
            <figure>
                <img src={icono1} alt="" />
                <figcaption>
                    <h3>Delivery a todo el Perú</h3>
                    <p>Envíos dentro de 24 horas hábiles ó previa coordinación, 
                        con la empresa de su preferencia.</p>
                </figcaption>
            </figure>
            <figure className='card'>
                <img src={icono2} alt="" />
                <figcaption>
                    <h3>Devoluciónes Fáciles</h3>
                    <p>Todos nuestros productos son de fácil devolución y tienen garantía.</p>
                </figcaption>
            </figure>
            <figure>
                <img src={icono3} alt="" />
                <figcaption>
                    <h3>Métodos de Pago</h3>
                    <p>Mercado Pago, Yape, Pling, Luquita, Efectivo Pago, y más.</p>
                </figcaption>
            </figure>
        </article>
       
    </section>
  )
}
