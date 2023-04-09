import axios from 'axios';
import { useEffect, useState } from 'react';
import {  Container, Titulo } from './style';

function Home(){
const [dados, setDados] = useState()
// Falta consumir a API por via do Axios 
useEffect(()=>{
       const get = axios.get("https://api.spacexdata.com/v5/launches/latest")
        console.log(get.then(res =>  setDados(res.data)))

    },[setDados])

    return(
    <Container>
        <Titulo>Machine - Space</Titulo>
    <p>Aqui você entra dados lançados pela SpaceX </p>
    </Container>
    )
}

export default Home