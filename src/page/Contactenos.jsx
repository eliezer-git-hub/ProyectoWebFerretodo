import React from 'react'

import { ArticleMenu } from '../components/ArticleMenu'
import { ArticleMenu2 } from '../components/ArticleMenu2'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { SectionContactenos } from '../components/SectionContactenos'
import { SectionNosotros2 } from '../components/SectionNosotros2'
import { SectionContactenos2 } from '../components/SectionContactenos2'

export const Contactenos = () => {
  return (
     <>
      <header>
          <Header/>
          <Banner/>
        </header>
        <main>
          <SectionContactenos/>
          <SectionContactenos2/>
        </main>
        <footer>
          <Footer/>
        </footer>
    </>
  )
}
