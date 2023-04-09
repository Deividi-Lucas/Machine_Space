import styled from "styled-components";
const blue= '#005288'
const cinza = '#a7a9ac'

export const NavBar = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 5rem 1rem 5rem;
    margin-bottom: 1rem;
    background: ${cinza};

    img {
        height: 7rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

`

export const Titulo = styled.h1`
    color: ${blue};
    text-shadow: 1px 3px 1rem black;
`
