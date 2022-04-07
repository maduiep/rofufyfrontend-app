import React from 'react'
import {
    TopContainer,
    TopHeader,
    Img,
    TopText,
    TopWrapper
} from './TopPostElements'

export const TopTrend = () => {
  const heading = 'Top Trending'
  return (
    <TopContainer>
        <TopWrapper>
            <TopHeader>
                <Img src="./images/arrowup.svg" />
                <TopText>{heading}</TopText>
            </TopHeader>
        </TopWrapper>
    </TopContainer>
  )
}


export default TopTrend