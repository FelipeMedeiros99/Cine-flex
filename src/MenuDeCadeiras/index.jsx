import styled from "styled-components"
import { useParams } from 'react-router-dom'
import Rodape from "../Rodape"
import { useEffect, useState } from "react"
import axios from 'axios'

const MenuDeCadeiras = (props) => {
    const {
        filmeSelecionado,
        sessaoSelecionada,
        dadosComprador,
        setDadosComprador,
        informacoesDaCompra,
        setInformacoesDaCompra
    } = props

    const [cadeirasSelecionadas, setCadeirasSelecionadas] = useState([])

    const idHorario = useParams().idHorario
    
    useEffect(()=>{
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idHorario}/seats`)
        .then((data) =>setInformacoesDaCompra(data.data))
        .catch((data)=> console.log(data))
    }, [])

    console.log(cadeirasSelecionadas)

    return (
        <>
            <Div>
                <h2>
                    Selecione o(s) assentos
                </h2>
                <div className="cadeiras">
                    {informacoesDaCompra.seats.map((cadeira, index) => (

                        <button 
                            className={cadeira.isAvailable?
                                'ocupado':
                                cadeirasSelecionadas.indexOf(index)!==-1?
                                'selecionada':
                                ''
                            }
                            onClick={()=>{
                                const copiaCadeiras = [...cadeirasSelecionadas]
                                const posicaoElemento = copiaCadeiras.indexOf(index)
                                if(!!(posicaoElemento===-1)){
                                    setCadeirasSelecionadas([...copiaCadeiras, index])
                                }else{
                                    copiaCadeiras.splice(posicaoElemento, 1)
                                    setCadeirasSelecionadas(copiaCadeiras)
                                }
                            }}>
                            {cadeira.name.length>1?cadeira.name:`0${cadeira.name}`}
                        </button>
                    ))}
                </div>
            </Div>

            <Rodape
                filmeSelecionado={filmeSelecionado}
                sessaoSelecionada={sessaoSelecionada}
            />
        </>
    )
}


const Div = styled.div`
    padding: 67px 24px 117px 24px;
    height: 100%;
    width: 375px;

    h2{
        font-size: 22px;
    }

    .cadeiras{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }


    button{
        font-size: 11px;
        width: 20px;
        height: 20px;
        padding: 0;
        border-radius: 30px;
        border: 1px;
        margin: 0 10px 19px 0;
        background-color:#808F9D;
    }

    .selecionada{
        background-color: #45BDB0   ;
    }

    .ocupado{
        background-color: #F7C52B;
    }

    .ocupado:hover{
        cursor: not-allowed;
    }

`


export default MenuDeCadeiras