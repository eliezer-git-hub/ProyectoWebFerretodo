import React, { useState } from 'react'

import { ArticleMenu } from '../components/ArticleMenu'
import { ArticleMenu2 } from '../components/ArticleMenu2'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { ContendPintura } from '../components/ContendPintura'
import { Aside } from '../components/Aside'

export const CategoriasPintura = () => {
  const [suma,setSuma]=useState(0);
  console.log("ggg",suma);
  console.log("aaaaa",setSuma);
 
  return (
     <>
      <header>
          <Header suma={suma}/>
          <Banner/>
        </header>
        <main className='contenedor'>
          <Aside/>
          <ContendPintura suma={suma} setSuma={setSuma}/>
        </main>
        <footer>
          <Footer/>
        </footer>
    </>
  )
}
