import React from 'react'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { ArticleMenu } from '../components/ArticleMenu'
import { ArticleMenu2 } from '../components/ArticleMenu2'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <>
      <header>
        <Header/>
        <Banner/>
      </header>
      <main>
        <ArticleMenu/>
        <ArticleMenu2/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}
