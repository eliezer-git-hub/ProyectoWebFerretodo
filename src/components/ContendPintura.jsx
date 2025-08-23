import React, { useContext } from 'react'
import imgpintura1 from '../image/PINTURA/Barniz.png'
import imgpintura2 from '../image/PINTURA/Brocha21.JPG'
import imgpintura3 from '../image/PINTURA/Pintura.jpg'
import imgpintura4 from '../image/PINTURA/Thinner.png'
import imgpintura5 from '../image/PINTURA/Sellador.png'
import imgpintura6 from '../image/PINTURA/Rodillo.jpg'
import { CategoriasPintura } from '../page/CategoriasPintura'
import { CarritoContext } from './UsarContex'
export const ContendPintura = () => {
    const{sumarProductos}=useContext(CarritoContext);
    const itempimtura=[
        {
            img:imgpintura1,
            nombre:'Barniz Marino 1gl Alquidico Tekno79.png',
            precioantes:17.99,
            precionuevo:15.99,
        },
        {
            img:imgpintura2,
            nombre:'Brocha 21-2 Nylon Extra Tumi',
            precioantes:11.00,
            precionuevo:9.50,
        },
        {
            img:imgpintura3,
            nombre:'Pintura Latex Mate 4l Color Blanco Cpp Pato',
            precioantes:45.00,
            precionuevo:40.00,
        },
        {
            img:imgpintura4,
            nombre:'Thinner Acrilico Automotriz 1gl',
            precioantes:22.50,
            precionuevo:19.00,
        },
        {
            img:imgpintura5,
            nombre:'Sellador De Pintura Blanco 4gl Cpp',
            precioantes:98.00,
            precionuevo:92.99,
        },
        {
            img:imgpintura6,
            nombre:'Rodillo 12 Verde Truper',
            precioantes:15.00,
            precionuevo:13.99,
        }
    ]

  return ( 
    <section className='section'>
        <h6>Home / PINTURAS Y BROCHAS</h6>
        <h1>PINTURAS Y BROCHAS</h1>
        <div className='Listaitems'>
            {
                itempimtura.map((item)=>(
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
