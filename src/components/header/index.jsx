import './style'
import { NavBar, Titulo } from "./style"
export default function Header(props){
    return (
    <NavBar>
    <img src={props.img} alt={props.alt } />
    <Titulo>{props.titulo}</Titulo>
    </NavBar>
)
}