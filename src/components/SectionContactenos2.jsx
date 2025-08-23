import React from 'react'
import IMGcontactenos1 from '../image/CONTACTENOS/correo-electronico.png'
import IMGcontactenos2 from '../image/CONTACTENOS/hogar.png'
import IMGcontactenos3 from '../image/CONTACTENOS/viber.png'
import IMGcontactenos4 from '../image/CONTACTENOS/logonuevo.png'


export const SectionContactenos2 = () => {
  return (
    <section className='SectionContactenos2'>
        <article className='informacion-contactenos'>
            <article>
                <h1>Nosotros te escuchamos</h1>
                <p>Estaremos encantados en solucionar tus dudas y problemas que tuvieras con la plataforma y nuestro servicio.</p>
                <hr />
                <div>
                    <img src={IMGcontactenos2} alt="" />
                    <span>
                        <h5>Dirección</h5>
                        <p>MZA. D LOTE. 08 PRADERAS DEL SOL 4 ETP LIMA – San Juan de Lurigancho</p>
                    </span>
                </div>
                <div>
                    <img src={IMGcontactenos3} alt="" />
                    <span>
                        <h5>Llamanos</h5>
                        <p>+51 912 990 342</p>
                    </span>
                </div>
                <div>
                    <img src={IMGcontactenos1} alt="" />
                    <span>
                        <h5>Correo Electrónico</h5>
                        <p>info@ferretodo.pe</p>
                    </span>
                </div>
            </article>
        </article>
        <article className='formulario-contactenos'>
            <img src={IMGcontactenos4} alt="" />
            <form action="">
                <input type="text" placeholder='NOMBRE'/>
                <input type="text" placeholder='ASUNTO'/>
                <input type="email" placeholder='EMAIL'/>
                <textarea name="descripcion" rows="4"  placeholder='MENSAJE'></textarea>
            </form>
            <button>Enviar mensaje</button>
        </article>
    </section>
  )
}
