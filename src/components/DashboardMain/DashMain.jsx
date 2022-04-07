import React from 'react'
import ImageSlider from '../ImageSlider/ImageSlider'
import Products from '../Products/Products'
import { TopPost } from '../TopPost/TopPost'

import {
    DashMainContainer
} from './DashMainEl'

const DashMain = () => {
  return (
    <DashMainContainer>
        <TopPost />
        <ImageSlider />
        <TopPost di/>
        <Products />
    </DashMainContainer>
  )
}

export default DashMain