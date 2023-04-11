import styled from "styled-components";
import { color } from "../../utils/color";

export const Container = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
background: linear-gradient(${color.cinza},${color.blue});
overflow-y: scroll;

@media (max-width: 290px) {
    
    div span{
        font-size: 12px;
    }
    
}
`
export const Main =styled.main`
height: 100%;
display: flex;
flex-direction: column;

div{
    background-color: rgb(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    align-self: center;
    padding: 3rem;
    border-radius: 8rem 4rem;
    span{
        color: white;
    }
}
`

export const Titulo = styled.h1`
    color: ${color.black};
`
