import React, { useContext } from 'react'
import IMGcables1 from '../image/ELECTRICIDAD/Cable.jpg'
import IMGcables2 from '../image/ELECTRICIDAD/Enchufe.jpg'
import IMGcables3 from '../image/ELECTRICIDAD/Extension.png'
import IMGcables4 from '../image/ELECTRICIDAD/Foco.png'
import IMGcables5 from '../image/ELECTRICIDAD/Interruptor.png'
import IMGcables6 from '../image/ELECTRICIDAD/Tomacorriente.png'
import { CarritoContext } from './UsarContex'

export const ContendCables = () => {
    const {sumarProductos} = useContext(CarritoContext);
    
        const itemcable=[
            {
                img:IMGcables1,
                nombre:'Cable Mellizo 2x16 Awg X M Brande',
                precioantes:4.90,
                precionuevo:4.00,
            },
            {
                img:IMGcables2,
                nombre:'Enchufe Industrial 125v Negro Opalux',
                precioantes:5.00,
                precionuevo:4.50,
            },
            {
                img:IMGcables3,
                nombre:'Extension Electrica Vulcanizada 5m  220v',
                precioantes:24.50,
                precionuevo:23.00,
            },
            {
                img:IMGcables4,
                nombre:'Foco Led 20w Tipo Cubo 144lm 250 Horas',
                precioantes:12.50,
                precionuevo:11.00,
            },
            {
                img:IMGcables5,
                nombre:'Interruptor Doble Empotrable Bticino Ms',
                precioantes:20.00,
                precionuevo:18.50,
            },
            {
                img:IMGcables6,
                nombre:'Tomacorriente Doble Con Puesta A Tierra ',
                precioantes:10.90,
                precionuevo:7.90,
            }
        ]
  return (
        <section className='section'>
        <h6>Home / ELECTRICIDAD Y CABLE</h6>
        <h1>ELECTRICIDAD Y CABLE</h1>
        <div className='Listaitems'>
            {
                itemcable.map((item)=>(
                    <article>
                        <div className='items'>
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
