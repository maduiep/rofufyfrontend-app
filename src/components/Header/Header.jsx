import React from 'react'
import { Link } from 'react-router-dom'

import {
    HeaderContainer,
    Logo,
    HeaderButtons,
    HeaderButtonOne,
    HeaderButtonTwo
} from './HeaderElements'

const Header = () => {
  const color = {
    color: 'white'
  }
  return (
    <HeaderContainer>
        <Logo src="./images/Logo.svg" />
        <HeaderButtons>
            <HeaderButtonOne><Link to="/register" style={color}>Register</Link></HeaderButtonOne>
            <HeaderButtonTwo><Link to="/login" style={color}>Login</Link></HeaderButtonTwo>
        </HeaderButtons>
    </HeaderContainer>
  )
}

export default Header