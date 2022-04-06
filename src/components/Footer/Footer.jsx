import React from 'react'
import { Logo } from '../Header/HeaderElements'

import {
    FooterContainer,
    FooterTextContainer,
    Text,
    Copyright
} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <Logo src="./images/Logo.svg" />
        <FooterTextContainer>
            <Text>Blog</Text>
            <Text>Privacy Policy</Text>
            <Text>About</Text>
            <Text>Contact</Text>
        </FooterTextContainer>
        <Copyright>&copy; copyright Rodufy 2022</Copyright>
    </FooterContainer>
  )
}

export default Footer