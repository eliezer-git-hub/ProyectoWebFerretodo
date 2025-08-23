import React from 'react'

import { ArticleMenu } from '../components/ArticleMenu'
import { ArticleMenu2 } from '../components/ArticleMenu2'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { SectionNosotros } from '../components/SectionNosotros'
import { SectionNosotros2 } from '../components/SectionNosotros2'

export const Nosotros = () => {
  return (
     <>
      <header>
          <Header/>
          <Banner/>
        </header>
        <main>
          <SectionNosotros/>
          <SectionNosotros2/>
        </main>
        <footer>
          <Footer/>
        </footer>
    </>
  )
}
