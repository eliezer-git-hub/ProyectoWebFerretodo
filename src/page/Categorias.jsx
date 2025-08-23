
import React from 'react'
import { ArticleMenu } from '../components/ArticleMenu'
import { ArticleMenu2 } from '../components/ArticleMenu2'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { ContendCategoria } from '../components/ContendCategoria'

export const Categorias = () => {
  return (
     <>
      <header>
          <Header/>
          <Banner/>
        </header>
        <main>
          <ContendCategoria/>
        </main>
        <footer>
          <Footer/>
        </footer>
    </>
  )
}
