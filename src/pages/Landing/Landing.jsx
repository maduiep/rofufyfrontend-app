import React from 'react'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Main from '../../components/Main/Main'
import Notify from '../../components/Notify/Notify'

import {
  LandingContainer
} from './LandingElements'

const Landing = () => {
  
  return (
    <LandingContainer>
      <Notify/>
      <Header />
      <Hero />
      <Main />
      <Contact />
      <Footer />
    </LandingContainer>
  )
}

export default Landing