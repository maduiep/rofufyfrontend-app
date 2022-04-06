import styled from "styled-components";

export const MainContainer = styled.div `
    margin-left: 0px !important;
    height: 51rem;
    background-color: var(--white-color);
`

export const MainWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    margin-left: 2.25rem;
    margin-right: 1.3125rem;
`

export const MainTextContainer = styled.div `
    margin-top: 5.625rem;
    width: 40.375rem;
`

export const TextContainerOne = styled.h2 `
    font-size: 4rem;
    font-weight: 700;
    line-height: 5.6875rem;
    color: var(--primary-color);

    span {
        color: var(--accent-color);
    }
`


export const TextContainerTwo = styled.p `
    font-size: 2rem;
    font-weight: 300;
    line-height: 2.875rem;
    color: var(--primary-color);
    padding-top: 2.25rem;
`

export const MainImgContainer = styled.div `
    margin-top: 4.3125rem;
`

export const MainBTNContainer = styled.div `
    margin-top: 5.6875rem;
`
export const MainBTN = styled.button `
    width: 30.375rem;
    height: 5.4375rem;
    background-color: var(--accent-color);

    font-size: 2.25rem;
    font-weight: 700;
    line-height:3.1875rem;
    color: var(--white-color);
    border-radius: 1rem;
    border: 2px solid var(--accent-color);
`
export const Img = styled.img `

`