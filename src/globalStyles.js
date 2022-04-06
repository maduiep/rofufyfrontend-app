import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

    :root{
        --primary-color: #301446;
        --accent-color: #EA7052;
        --white-color: #ffffff;
        --gray-color: #F4F4F4;
       
    }
    
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        text-decoration: none;
    }
    
    body{
        font-family: 'Chalkboard SE', sans-serif;
        overflow-x: hidden;
        color: var(--white-color);
    }
`

export default GlobalStyle;