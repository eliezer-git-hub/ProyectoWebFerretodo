import React from 'react'
import menu2 from '../image/INICIO/menu2.webp'

export const ArticleMenu2 = () => {
  return (
    <section className='Article-menu2'>
        <figure>
            <figcaption>
                <h2>Somos tu ferretería distribuidora mayorista</h2>
                <p>Tenemos cientos de productos ferreteros económicos y de alta rotación, 
                    que necesitas para mejorar tus ingresos.</p>
            </figcaption>
            <img src={menu2} alt="" />
        </figure>
    </section>
  )
}
