import axios, { formToJSON } from "axios"
import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from 'react-router-dom'
import styled from "styled-components"


const MenuDeHorarios = (props) =>{
    const {
        filmeSelecionado,
        setfilmeSelecionado
    } = props

    const {idDoFilme} = useParams()

    const navigate = useNavigate()

    const abrirLink = (horario)=>{
        navigate(`/sessao/${horario.id}`)
    }

    console.log(filmeSelecionado)


    useEffect(()=>{
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idDoFilme}/showtimes`)
        .then((data)=>setfilmeSelecionado(data.data))
        .catch((data)=>console.log(data.response))
    }, [idDoFilme])

    return(
        <Disponibilidade>
            <h2>Selecione o horário</h2>
                {filmeSelecionado.days!==undefined?
                    filmeSelecionado.days.map((disponibilidade, index)=>(
                        <div key={index} className="horario ">
                            <p>{disponibilidade.weekday} - {disponibilidade.date}</p>  
                            <div className="horarios-do-dia">
                                {disponibilidade.showtimes.map((horario, index2)=>(                                  
                                    <button key={index2} type="submit" onClick={()=>abrirLink(horario)}>
                                        {horario.name}
                                    </button> 
                                ))}
                            </div>
                        </div>
                    


                    ))
                    :<></>
                }
        </Disponibilidade>
    )
} 


const Disponibilidade = styled.div`
    width: 375px;
    p{
        font-size: 20px;
        font-weight:400;
    }

    button{
        margin: 22px 8px 22px 0;
        background-color: #E8833A;
        color: white;
        width: 82px;
        height: 43px;
        border: none;
        border-radius: 5px;
    }

    button:hover{
       background-color: #ca6e2c;
       cursor: pointer;
    }

    .horario{
        margin-left: 23px;
    }



`

export default MenuDeHorarios