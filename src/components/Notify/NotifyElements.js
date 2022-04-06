import styled from "styled-components";

export const NofitContainer = styled.div `
    width: 100%;
    height: 11.125rem;
    background-color: var(--accent-color);
    display: ${({isOpen}) => (isOpen ? 'none' : 'block')}
`

export const NotifyWrapper = styled.div`
    margin-left: 2.25rem;
    margin-right: 1.3125rem;
    padding-top: 3.6875rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NotifyNew = styled.div `
    width: 13.3125rem;
    height: 4.6875rem;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 1rem;

    font-size: 2.25rem;
    font-weight: 700;
    line-height: 3.1875rem;
    text-align: center;
    padding-top: 0.5rem;
`

export const NotifyText = styled.h3 `
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 3.1875rem;
`

export const NotifyIcon = styled.div `
    
`

export const Img = styled.img `
    cursor: pointer;
    width: 3rem;
`