import React from 'react'
import IMGnosotros from '../image/NOSOTROS/nosotros.png'

export const SectionNosotros = () => {
  return (
    <section className='SectionNosotros'>
        <div>
            <div>  
                <h1>Te contamos sobre nosotros</h1>
                <p>Somos una empresa dedicada al rubro ferretero corporativo, comercializamos y distribuimos las mejores marcas, somos eficientes ante nuestros clientes, brindamos una atención personalizada. Tiene el objetivo de comercializar en el puerto suministros ferreteros tales como material eléctrico, herramientas, 
                    pernería, rodamientos, entre otros productos.</p>
            </div>
        </div>
        <img src={IMGnosotros} alt="" />
    </section>
  )
}
