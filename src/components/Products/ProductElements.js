import styled from "styled-components";

export const ProductsContainer = styled.div`
    margin-left: 2.25rem;
    margin-right: 1.3125rem;
`
export const ProductWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const PostContainer = styled.div`
    width: 30rem;
    height: 20rem;
    border-radius: 1rem;
    background-image: url('/images/slider-1.svg');
    margin-top: 4rem;
    position: relative;
`

export const PostTextContainer = styled.div`
    width: 25rem;
    height: 7rem;
    background-color: #636262;
    opacity: 0.7;
    border-radius: 0.5rem;
    position: absolute;
    top: 12rem;
    left: 2rem;
`

export const PostText = styled.h4`
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 2rem;
    color: var(--white-color);
    padding-top: 1rem;
    padding-left: 1rem;
`

export const LoadMore = styled.button`
    width: 20rem;
    height: 4rem;
    border-radius: 0.5rem;
    border: solid 2px var(--accent-color);
    background-color: var(--accent-color);

    font-size: 1.3rem;
    font-weight: 700;
    line-height: 1rem;
    color: var(--white-color);

    margin: 2rem 10rem 2rem 30rem;
    cursor: pointer;
`