import styled from 'styled-components'

export const HeaderContainer = styled.h2 `
   margin-top: 2.75rem;
   display: flex;
   justify-content: space-between;
   margin-bottom: 9rem;
   margin-left: 2.25rem;
   margin-right: 1.3125rem;
`

export const Logo = styled.img `
    width: 11rem;
    cursor: pointer;
`

export const HeaderButtons = styled.div `
    display: flex;
`

export const HeaderButtonOne = styled.button `
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--white-color);
    width: 11.1875rem;
    height: 3.0625rem;
    background-color: var(--accent-color);
    border-radius: 1rem;
    border: 2px solid var(--accent-color);
    cursor: pointer;
`

export const HeaderButtonTwo = styled.button `
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--white-color);
    width: 11.1875rem;
    height: 3.0625rem;
    background-color: var(--primay-color);
    border: 2px solid var(--accent-color);
    border-radius: 1rem;
    margin-left: 1.5rem;
    cursor: pointer;
`