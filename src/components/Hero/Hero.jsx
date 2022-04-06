import React from 'react'

import {
    HeroContainer,
    TextContainer,
    ImgContainer,
    Img,
    HeroMainText,
    HeroMiddleText,
    DownloadContainer,
    DownloadText,
    DownloadIcons,
    IconOne,
    IconTwo
} from './HeroElements'

const Hero = () => {
  return (
    <HeroContainer>
        <TextContainer>
          <HeroMainText>
            Our mission is to <span>advance</span> humanity
          </HeroMainText>
          <HeroMiddleText>
            We would strive to achieve that through providing education and quality health
          </HeroMiddleText>

          <DownloadContainer>
            <DownloadText>
              DOWNLOAD <br /> APP
            </DownloadText>
            <DownloadIcons>
              <IconOne src="./images/google-play.svg"/>
              <IconTwo src="./images/apple.svg"/>
            </DownloadIcons>
          </DownloadContainer>
        </TextContainer>
  
        <ImgContainer>
            <Img src="./images/hero-img.svg" />
        </ImgContainer>
    </HeroContainer>
  )
}

export default Hero