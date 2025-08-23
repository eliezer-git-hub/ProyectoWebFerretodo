import React from 'react'
import Nosotros1 from '../image/NOSOTROS/corazon.png'
import Nosotros2 from '../image/NOSOTROS/logoinstagram.png'
import Nosotros3 from '../image/NOSOTROS/simbolofacebook.png'
import Nosotros4 from '../image/NOSOTROS/whatsapp.png'


export const SectionNosotros2 = () => {
  return (
    <section className='SectionNosotros2'>
        <div/>
        <article>
            <h1>Siguenos</h1>
            <span>
                <a href="https://instagram.com" target="_blank"><img src={Nosotros2} alt="" /></a>
                <a href="https://www.facebook.com" target="_blank"><img src={Nosotros3} alt="" /></a>
                <a href="https://www.whatsapp.com" target="_blank"><img src={Nosotros4} alt="" /></a>
            </span>
            <img  src={Nosotros1} alt="imagen de corazon" />
        </article>
        <div/>
    </section>
  )
}
