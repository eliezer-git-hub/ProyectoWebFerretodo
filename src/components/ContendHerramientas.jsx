import React, { useState } from 'react'
import IMGherramienta1 from '../image/HERRAMIENTAS/Alicate.jpg'
import IMGherramienta2 from '../image/HERRAMIENTAS/Destornillador.jpg'
import IMGherramienta3 from '../image/HERRAMIENTAS/Fraguador.jpg'
import IMGherramienta4 from '../image/HERRAMIENTAS/Martillo.jpeg'
import IMGherramienta5 from '../image/HERRAMIENTAS/Plancha.jpg'
import IMGherramienta6 from '../image/HERRAMIENTAS/Wincha.jpg'
import { useContext } from 'react'
import { CarritoContext } from './UsarContex'
export const ContendHerramientas = () => {
    const {sumarProductos}=useContext(CarritoContext);
        const itemherramienta=[
            {
                img:IMGherramienta1,
                nombre:'Alicate Punta Curva 6 Comfort Grip Truper',
                precioantes:25.50,
                precionuevo:23.90,
            },
            {
                img:IMGherramienta2,
                nombre:'Destornillador Desarmador Estrella',
                precioantes:9.00,
                precionuevo:6.00,
            },
            {
                img:IMGherramienta3,
                nombre:'Fraguador Espuma 10x24cm Pretul',
                precioantes:15.50,
                precionuevo:12.50,
            },
            {
                img:IMGherramienta4,
                nombre:'Martillo 29mm Mango Madera Pulido Pesado',
                precioantes:35.90,
                precionuevo:32.90,
            },
            {
                img:IMGherramienta5,
                nombre:'Plancha Batir 8 Mango Madera Pretul',
                precioantes:20.00,
                precionuevo:15.50,
            },
            {
                img:IMGherramienta6,
                nombre:'Wincha 3m Abs Cinta 13mm Pretul6',
                precioantes:7.00,
                precionuevo:6.00,
            }
        ]
  return (
        <section className='section'>
        <h6>Home / HERRAMIENTAS Y MAQUINAS</h6>
        <h1>HERRAMIENTAS Y MAQUINAS</h1>
        <div className='Listaitems'>
            {
                itemherramienta.map((item,index)=>(
                    <article key={index}>
                        <div className='items' key={index}>
                            <img src={item.img} alt="" />
                            <h2>{item.nombre}</h2>
                            <div>
                                <h4 >S/ {item.precionuevo.toFixed(2)}</h4>
                                <h5 >S/ {item.precioantes.toFixed(2)}</h5>
                            </div>
                            <button className='boton-carrito' onClick={()=>{sumarProductos(item.precionuevo)}}>Agregar al Carrito +</button>
                        </div>                        
                    </article>
                ))
            }
        </div>
    </section>
  )
}
