import React from 'react'

import { ArticleMenu } from '../components/ArticleMenu'
import { ArticleMenu2 } from '../components/ArticleMenu2'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Aside } from '../components/Aside'
import { ContendCables } from '../components/ContendCables'

export const CategoriasCables = () => {
  return (
     <>
      <header>
          <Header/>
          <Banner/>
        </header>
        <main className='contenedor'>
          <Aside/>
          <ContendCables/>
        </main>
        <footer>
          <Footer/>
        </footer>
    </>
  )
}
