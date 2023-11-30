// Component for the header part of the page
import React from 'react'
import './header.css'
// importing the CTA(Call to action) component
import CTA from './CTA.jsx'
// Importing image of myself
import Hero from '../../assets/hero-img.png'
// Importing the socials component
import Socials from './Socials.jsx'	

const Header = () => {
  return (
    <header>
      {/* the __ is called BEM (Block, Element, Modifier) */}
      {/* More info: https://www.smashingmagazine.com/2018/06/bem-for-beginners/ */}
      <main className="container header__container">
        <h5>Hello i'am</h5>
        <h1>Jasper van den Heuvel</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />

        <Socials />

        <article className="hero">
          <img src={Hero} alt="Me" />
        </article>

        <a className='scroll__down' href="#conatct">Scroll down</a>

      </main>
    </header>
  )
}

export default Header