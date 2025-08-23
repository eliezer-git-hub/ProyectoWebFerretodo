import React, { useContext, useState } from 'react'
import logo from   '../image/INICIO/logonuevo.png'
import carrito from '../image/INICIO/carrito.png'
import { Link } from 'react-router-dom'
import { CarritoContext } from './UsarContex'

export const Header = () => {

  const{suma,resetProductos}=useContext(CarritoContext);

  return (
    <div className='content-header'>
        <div className='header-logo'><img src={logo} alt="" /></div>
        <div >
          <ul className='header-menu'>
            <li className='header-lista'>
              <Link to='/' className='header-link'>INICIO</Link>
            </li>
            <li className='listapadre'>
              <Link to='/categorias' className='header-link'>CATEGORIAS</Link>
              <ul className='listahija'>
                <li><Link to='/categorias/cables' className='header-link2'>ELECTRICIDAD Y CABLES</Link></li>
                <li><Link to='/categorias/herramienta' className='header-link2'>HERRAMIENTAS Y MAQUINAS</Link></li>
                <li><Link to='/categorias/pintura' className='header-link2'>PINTURAS Y BROCHAS</Link></li>
              </ul>
            </li>
            <li className='header-lista'>
              <Link to='/nosotros' className='header-link'>SOBRE NOSOTROS</Link>
            </li>
            <li className='header-lista'>
              <Link to='/contactenos' className='header-link'>CONTACTENOS</Link>
            </li>
          </ul>
        </div>
        <div className='header-carrito'>
            <h4>CARRITO / S/{suma.toFixed(2)}</h4>
            <img  onClick={resetProductos} src={carrito} alt="" />
        </div>
    </div>
  )
}
