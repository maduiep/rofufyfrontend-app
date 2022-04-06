import styled from "styled-components";

export const HeroContainer = styled.div `
    display: flex;
    justify-content: space-between;
    margin-left: 2.25rem;
    margin-right: 1.3125rem;
    background-color: var(--primary-color);
`

export const TextContainer = styled.div `
    
`

export const ImgContainer = styled.div `

`

export const Img = styled.img `

`

export const HeroMainText = styled.h2 `
    font-size: 4rem;
    font-weight: 700;
    line-height: 5rem;
    padding-bottom: 2.875rem;

    span {
        color: var(--accent-color);
        border-bottom: 0.5625rem solid var(--white-color);
    }
`

export const HeroMiddleText = styled.p `
    font-size: 2rem;
    font-weight: 300;
    line-height: 2.875rem;
    padding-bottom: 2rem;
`

export const DownloadContainer = styled.div `
    display: flex;
    justify-content: space-between;
    width: 36rem;
`

export const DownloadText = styled.p `
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 2.5rem;
`

export const DownloadIcons = styled.div `
    display: flex;
`

export const IconOne = styled.img `
    width: 7.5rem;
`

export const IconTwo = styled.img `
    width: 7.5rem;
    margin-left: 1.125rem;
`