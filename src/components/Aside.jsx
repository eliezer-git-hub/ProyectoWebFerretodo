import React from 'react'
import { Link } from 'react-router-dom'
 
export const Aside = () => {
  return (
    <aside>
        <h1>CATEGORIAS</h1>
        <ul>
            <li><Link to='/categorias/cables' className='asidelink'>Electricidad y Cables</Link></li>
            <li><Link to='/categorias/herramienta' className='asidelink'>Herramientas y Maquinas</Link></li>
            <li><Link  to='/categorias/pintura' className='asidelink'>Pinturas y Brochas</Link></li>
        </ul>
    </aside>
  )
}
