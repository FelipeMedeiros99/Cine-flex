import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'


const MenuDeFilmes = (props) =>{
    const {
        listaFilmes,
        setListaFilmes,
        setFilmeSelecionado,
        setSessaoSelecionada
    } = props

    useEffect(()=>{
        setSessaoSelecionada({})
        setFilmeSelecionado([])

        const promisse = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
        promisse.then((data)=>setListaFilmes(data.data))
        promisse.catch((data)=>console.log(data.response))
    
    }, [])



    return(
        <ListaDeFilmes>
            <h2>Selecione o filme</h2>
            <div className="filmes">
                {listaFilmes.map((dadosFilme, index)=>(
                    <Link key={index} to={`/filme/${dadosFilme.id}`}>
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