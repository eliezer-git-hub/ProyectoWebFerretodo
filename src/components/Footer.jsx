import React from 'react'
import social1 from '../image/INICIO/tiktok.png'
import social2 from '../image/INICIO/face.png'
import social3 from '../image/INICIO/youtube.png'
import social4 from '../image/INICIO/instagra.png'

export const Footer = () => {
  return (
    <>  
        <div>
            <h4>Copyright © 2025 Ferretodo. Hecho por Ferretodo</h4>
            <h4>Todos los Derechos Reservados</h4>  
        </div>
        <div>
            <h4>Redes Sociales</h4>
            <div>
                <img src={social1} alt="" />
                <img src={social2} alt="" />
                <img src={social3} alt="" />
                <img src={social4} alt="" />
            </div>
        </div>
       
    </>
  )
}
