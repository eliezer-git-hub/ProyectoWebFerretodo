import React from 'react'

import { ArticleMenu } from '../components/ArticleMenu'
import { ArticleMenu2 } from '../components/ArticleMenu2'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { ContendHerramientas } from '../components/ContendHerramientas'
import { Aside } from '../components/Aside'

export const CategoriasHerramienta = () => {
  return (
     <>
      <header>
          <Header/>
          <Banner/>
        </header>
        <main className='contenedor'>
          <Aside/>
          <ContendHerramientas/>
        </main>
        <footer>
          <Footer/>
        </footer>
    </>
  )
}
