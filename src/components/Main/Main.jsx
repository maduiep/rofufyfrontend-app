import React from 'react'

import {
    MainContainer,
    MainWrapper,
    MainTextContainer,
    TextContainerOne,
    TextContainerTwo,
    MainImgContainer,
    MainBTNContainer,
    MainBTN,
    Img
} from './MainElements'

const Main = () => {
  return (
    <MainContainer>
      <MainWrapper>
        <MainTextContainer>
          <TextContainerOne>
            Everything you’ll need to <span>excel</span> in life
          </TextContainerOne>
          <TextContainerTwo>
            We’ve curated a list of valuable resources to get you going in life, all for free!
          </TextContainerTwo>

          <MainBTNContainer>
            <MainBTN>Get Started</MainBTN>
          </MainBTNContainer>
        </MainTextContainer>
        <MainImgContainer>
          <Img src='./images/main-img.svg' />
        </MainImgContainer>
      </MainWrapper>
    </MainContainer>
  )
}

export default Main