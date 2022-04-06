import React from 'react'
import {
    TopContainer,
    TopHeader,
    Img,
    TopText,
    TopWrapper
} from './TopPostElements'

export const TopPost = () => {
  const heading = 'Top Post'
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
