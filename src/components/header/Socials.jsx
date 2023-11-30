// Component for socials section in the header
import React from 'react'
// Importing icons from react-icons
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Socials = () => {
  return (
    <article className="header__socials">
        <a href="https://www.linkedin.com/in/jasper-van-den-heuvel-00424a193/" rel='noreferrer' target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Jasper20037" rel='noreferrer' target='_blank'><BsGithub/></a>
        {/* <a href="https://www.instagram.com/jasper2003_040/" target='_blank'></a> */}
    </article>
  )
}

export default Socials