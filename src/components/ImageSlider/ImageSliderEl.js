import styled from "styled-components";

export const ImageSliderContainer = styled.div`
    margin-left: 2.25rem;
    margin-right: 1.3125rem;
`

export const ImageContainer = styled.div`
    width: 30rem;
    height: 20rem;
    border-radius: 1rem;
    background-image: url('/images/slider-1.svg');
    margin-top: 4rem;
    position: relative;
`

export const TextContainer = styled.div`
    width: 25rem;
    height: 7rem;
    background-color: #636262;
    opacity: 0.7;
    border-radius: 0.5rem;
    position: absolute;
    top: 12rem;
    left: 2rem;
`

export const Text = styled.h4`
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 2rem;
    color: var(--white-color);
    padding-top: 1rem;
    padding-left: 1rem;
`