import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from './style';
import Header from '../../components/header';


function Home(){
const [Hour, setHour] = useState()
const [img, setImg] = useState()
useEffect(()=>{
    const get = axios.get("https://api.spacexdata.com/v5/launches/latest").then((res)=> {return res})
    // get img in api
    get.then(res=> setImg(res.data.links.patch.small))
    // get hour last flight
    get.then(res=> setHour(res.data.date_local))

    },[])

    return(
    <Container>
        <Header img={img} alt='Logo falcon 9' titulo='Machine - Space'/>
        <p>Aqui você entra dados lançados pela SpaceX <span>Horário do último lançamento {Hour}</span> </p>
    </Container>
    )
}

export default Home