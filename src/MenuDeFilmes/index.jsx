import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'


const MenuDeFilmes = (props) =>{

    const [listaFilmes, setListaFilmes] = useState([])

    console.log(listaFilmes)

    useEffect(()=>{
        const promisse = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
        promisse.then((data)=>setListaFilmes(data.data))
        promisse.catch((data)=>console.log(data))

    }, [])


    return(
        <ListaDeFilmes>
            <p>Selecione o filme</p>
            <div className="filmes">
                {listaFilmes.map((dadosFilme, index)=>(
                    <Link to={`/horarios:${dadosFilme.id}`} >
                        <img src={dadosFilme.posterURL} alt={dadosFilme.title} />
                    </Link>
                ))}        
            </div>
        </ ListaDeFilmes>
    )
} 


const ListaDeFilmes = styled.div`
    display: flex;
    flex-direction: column;
    width: 375px;
    align-items: center;

    p{  
        padding: 58px;
        font-size: 34px;
        color: #293845;
        font-weight: 400;
        font-family: "Roboto Condensed", sans-serif;
    }

    img{
        width: 129px;
        height: 193px;
        padding: 5px;
        margin-bottom: 27px;
        border-radius: 5px;
        box-shadow: 0 0 3px black
    }

    img:hover{
        cursor: pointer;
    }

    .filmes{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        max-width: 375px;
    }

`

export default MenuDeFilmes