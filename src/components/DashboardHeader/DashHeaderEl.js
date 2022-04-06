import styled from "styled-components";

export const DashHeaderContainer = styled.div `
    width: 100%;
    height: 20rem;
    background-color: var(--primary-color);
`

export const HeaderWrapper = styled.div `
   margin-left: 2.25rem;
   margin-right: 1.3125rem;
   display: flex;
   justify-content: space-between;
`


export const Logo = styled.img `
    margin-top: 5rem;
    width: 11rem;   
`

export const HeaderUser = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 3.5rem;
    align-items: center;
`

export const Username = styled.p `
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 3rem;
`

export const LogoutBTN = styled.button `
    width: 10rem;
    height: 3.5rem;
    background-color: var(--accent-color);
    border-radius: 0.5rem;
    border: solid 2px var(--accent-color);
    margin-top: 2rem;
    cursor: pointer;

    font-size: 1.25rem;
    font-weight: 700;
    line-height: 3rem;
    text-align: center;
    color: var(--white-color);
    
`