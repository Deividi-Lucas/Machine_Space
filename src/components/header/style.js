import styled from "styled-components";
import { color } from "../../utils/color";

export const NavBar = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 5rem 1rem 5rem;
    border-radius: 0 0 1rem 1rem;
    margin-bottom: 1rem;
    gap: 1rem;
    background-color: ${color.cinza};

    img {
        height: 7rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 280px) {
    gap: 1rem;
        justify-content: center;
    img{
        height: 4rem;
    }
    
}

`

export const Titulo = styled.h1`
    color: ${color.blue};
    text-shadow: 1px 3px 1rem black;
`
