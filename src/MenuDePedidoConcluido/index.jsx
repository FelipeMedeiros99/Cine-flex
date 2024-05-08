import styled from "styled-components"
import {useNavigate} from 'react-router-dom'


const MenuDePedidoConcluido = (props) =>{
    const {
        informacoesDaCompra,
        cadeirasSelecionadas,
        dadosComprador,
        setFilmeSelecionado,
        setDadosComprador,
        setCadeirasSelecionadas,
        setSessaoSelecionada, 
        setInformacoesDaCompra
    } = props

    const navigate = useNavigate()

    return(
        <PedidoConcluido>
            <div className="container-h1">
                <h1>Pedido feito com sucesso!</h1>

            </div>

            <div className="informacoes-pedido">
                <div className="bloco filme-e-sessao">
                    <h2>Filme e sessão:</h2>
                    <p>{informacoesDaCompra.movie.title}</p>
                    <p>{informacoesDaCompra.day.date}  {informacoesDaCompra.name}</p>
                </div>

                <div className="bloco assentos">
                    <h2>Ingressos</h2>
                    {cadeirasSelecionadas.map((cadeira, index)=>(
                    <p key={index}>Assento {cadeira}</p>
                    ))}
                </div>

                <div className="bloco dados-comprador">
                    <h2>Comprador</h2>
                    <p>Nome: {dadosComprador.nome}</p>
                    <p>CPF: {dadosComprador.cpf}</p>
                </div>

            </div>
            
            <div className="container-botao">
                <button onClick={()=> {
                    setFilmeSelecionado([])
                    setDadosComprador({nome:"", cpf:""})
                    setCadeirasSelecionadas([])
                    setSessaoSelecionada({})
                    setInformacoesDaCompra({})
                    navigate('/')}}>Voltar para home</button>
            </div>
        </PedidoConcluido>
    )
} 

const PedidoConcluido = styled.div`
    margin-top: 67px;
    width: 375px;
    position: relative;
    padding: 28px;

    h1, h2{
        font-size:24px;
        font-weight: 700;
    
    }

    .container-h1{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 110px;
        width: 100%;
    }

    h1{
        color: #247A6B;
        height: auto;
        width: 187px;

        text-align: center;
    }

    h2{
        justify-content: left;
        height: auto;
        margin-bottom: 10px;
    }

    .bloco{
        margin-bottom: 30px;
    }

    p{
        font-size: 22px;
    }

    .container-botao{
        width: 100%;
        margin-top: 51px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    button{
        width: 225px;
        height: 42px;
        border-radius: 3px;
        background-color: #E8833A;
        color: white;
        border: none;
    }
`

export default MenuDePedidoConcluido