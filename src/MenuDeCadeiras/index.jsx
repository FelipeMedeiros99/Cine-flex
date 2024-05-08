import styled from "styled-components"
import { useNavigate, useParams } from 'react-router-dom'
import Rodape from "../Rodape"
import { useEffect, useState } from "react"
import axios from 'axios'


const MenuDeCadeiras = (props) => {
    const navigate = useNavigate()

    const {
        filmeSelecionado,
        sessaoSelecionada,
        dadosComprador,
        setDadosComprador,
        informacoesDaCompra,
        setInformacoesDaCompra,
        cadeirasSelecionadas,
        setCadeirasSelecionadas
    } = props

    const idHorario = useParams().idHorario

    useEffect(()=>{
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idHorario}/seats`)
        .then((data) =>setInformacoesDaCompra(data.data))
        .catch((data)=> console.log(data))
    }, [])

    useEffect(()=>{
        if (filmeSelecionado.length===0 || sessaoSelecionada.length===0){
            navigate('/')
        }
    }, [filmeSelecionado, sessaoSelecionada])


    return (
        
        <>
            <Div>
                <h2>
                    Selecione o(s) assentos
                </h2>
                <div className="cadeiras">
                    {informacoesDaCompra.seats !== undefined?
                    informacoesDaCompra.seats.map((cadeira, index) => (
                        <button 
                            className={!cadeira.isAvailable?
                                'ocupado':
                                cadeirasSelecionadas.indexOf(index)!==-1?
                                'selecionada':
                                'livre'
                            }
                            onClick={()=>{
                                if(cadeira.isAvailable){
                                    let copiaCadeiras = [...cadeirasSelecionadas]
                                    let posicaoElemento = copiaCadeiras.indexOf(index)
                                    if(posicaoElemento===-1){
                                        setCadeirasSelecionadas([...copiaCadeiras, index])
                                    }else{
                                        copiaCadeiras.splice(posicaoElemento, 1)
                                        setCadeirasSelecionadas(copiaCadeiras)
                                    }
                                }
                            }}
                            key={index}
                            >
                            
                            {cadeira.name.length>1?cadeira.name:`0${cadeira.name}`}
                        </button>
                    )):<></>}

                    <div className="legenda">
                        <div className="container-legenda">
                            <p className="selecionada"></p>
                            <p>Selecionado</p>
                        </div>
                        
                        
                        <div className="container-legenda">
                            <p className="livre"></p>
                            <p>Livre</p>
                        </div>
                        <div className="container-legenda">
                            <p className="ocupado"></p>
                            <p>Ocupado</p>
                        </div>                        
                    </div>
                </div>

                <Form onSubmit={(event) => {
                    event.preventDefault()
                    const infoCompra = {ids: [...cadeirasSelecionadas], name:dadosComprador.nome, cpf: dadosComprador.cpf}
                    if(cadeirasSelecionadas.length>0){
                        axios.post(`https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`, infoCompra)
                        .then((data)=>navigate('/sucesso'))
                        .catch((data)=>console.log(data))
                    }

                }}>
                    <label htmlFor="nome">Nome do comprador:</label>
                    <input 
                        type="text" 
                        id="nome"
                        value={dadosComprador.nome}
                        onChange={(event)=>{
                            const copiaDadosComprador = {...dadosComprador}
                            copiaDadosComprador.nome = event.target.value
                            setDadosComprador({...copiaDadosComprador})}}
                        placeholder="Digite seu nome..."
                        required
                        minLength={5}
                        name='nome'
                        />

                    <label htmlFor="cpf">Insira o CPF:</label>
                    <input 
                        type="numeric"
                        inputMode="numeric" 
                        id="cpf"
                        value={dadosComprador.cpf}
                        onChange={(event)=>{
                            const copiaDadosComprador = {...dadosComprador}
                            copiaDadosComprador.cpf = event.target.value
                            setDadosComprador({...copiaDadosComprador})
                        }}
                        placeholder="Digite seu CPF..."
                        required
                        minLength={11}
                        name='cpf'
                        
                        />
                    <div className="container-botao">
                        <button type="submit">Reservar assentos</button>
                    </div>
                </Form>

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
    overflow-y: auto;
    h2{
        font-size: 22px;
    }

    .cadeiras{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }


    button, .livre, .ocupado, .selecionada{
        font-size: 11px;
        width: 20px;
        height: 20px;
        padding: 0;
        border-radius: 30px;
        border: 1px #808F9D;
        margin: 0 10px 19px 0;
        background-color: #C3CFD9;
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

    .legenda{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }

    .container-legenda{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 41px;
    
    .container-botao{
        width: 100%;
        margin-top: 51px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    input{
        height: 51px;
        margin-bottom: 10px;
    }

    label{
        font-size: 18px;
    }

    button{
        width: 225px;
        height: 42px;
        border-radius: 3px;
        background-color: #E8833A;
        color: white;
    }
`

export default MenuDeCadeiras