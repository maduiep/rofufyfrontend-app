import styled from "styled-components";

export const AuthContainer = styled.div `
    display: flex;
`

export const SidebarContainer = styled.div `
    width: 20rem;
    height: 50rem;
    background-color: var(--primary-color);
    margin-right: 2.5625rem;
`

export const MainContainer = styled.div `
    width: 45rem;
    height: 35rem;
    margin: 5.5625rem;
    background-color: var(--white-color);
    border-radius: 1.5rem;
`

export const Img = styled.img `
    width: 20rem;
    height: 50rem;
    cursor: pointer;
`

export const MainText = styled.h3 `
    font-size: 2.25rem;
    font-weight: 400;
    line-height: 3.5625rem;
    color: var(--primary-color);
    text-align: center;
    padding-top: 5rem;
`
export const Form = styled.form `
    display: flex;
    align-items: center;
    flex-direction: column;
    align-content: space-around;
    margin-top: 3.5rem;
`
export const InputContainerOne = styled.input `
    width: 25rem;
    height: 3.5rem;
    background-color: var(--gray-color);
    border: none;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 4rem;
    color: #8C8C8C;
    padding-left: 1rem;
    outline: none;
`

export const InputContainerTwo = styled.input `
    width: 25rem;
    height: 3.5rem;
    background-color: var(--gray-color);
    border: none;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 4rem;
    color: #8C8C8C;
    padding-left: 1rem;
    outline: none;
`

export const Button = styled.button `
    width: 25rem;
    height: 4rem;
    background-color: var(--accent-color);
    border: none;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 4rem;
    color: var(--white-color);
    text-align: center;
    margin-top: 3.5rem;
    border: solid 2px var(--accent-color);
    cursor: pointer;
`