import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Main, Titulo } from './style';
import Header from '../../components/header';
import Footer from '../../components/footer';


function Home(){
const [Hour, setHour] = useState()
const [img, setImg] = useState()
const [video, setVideo] = useState()
const [wiki, setWiki] = useState()
const [name, setName] = useState()
const [numberfly, setNumberfly]=useState()
useEffect(()=>{
    const get = axios.get("https://api.spacexdata.com/v5/launches/latest").then((res)=> {return res})
    // get img in api
    get.then(res=> setImg(res.data.links.patch.small))
    // get hour last flight
    get.then(res=> setHour(res.data.date_local))
    // get link video 
    get.then(res=> setVideo(res.data.links.webcast))
    //get wikepedia link 
    get.then(res=> setWiki(res.data.links.wikipedia))
    //get name misson 
    get.then(res=> setName(res.data.name))
    // get number fly 
    get.then(res=> setNumberfly(res.data.flight_number))


    },[])

    return(
    <Container>
        <Header img={img} alt='Logo falcon 9' titulo='Machine Space'/>
        <Main>
            <div>
                <Titulo>{name}</Titulo>
                <span>Aqui você entra dados lançados pela SpaceX  </span>
                <span>Horário do último lançamento {Hour}</span>
                <span>Link do Vídeo <a href={video}>{video}</a></span>
                <span>URL da Wikipedia <a href={wiki}>{wiki}</a></span>
                <span>Numero de voo: {numberfly}</span>
            </div>
        </Main>
        <Footer/>
    </Container>
    )
}

export default Home