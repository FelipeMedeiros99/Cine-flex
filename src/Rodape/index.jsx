import styled from 'styled-components'

const Rodape = (props) =>{
    const { 
        filmeSelecionado,
        sessaoSelecionada
    } = props
    
    return(
        <Div>
            <img src={filmeSelecionado.posterURL} alt="" />
            <div className="informacoes">
                <h2>{filmeSelecionado.title}</h2>
                {(sessaoSelecionada.dia!==undefined && sessaoSelecionada.horario!==undefined)?
                <h2>{sessaoSelecionada.dia} - {sessaoSelecionada.horario}</h2>
                :<></>
                }
            </div>
        </Div>
    )
}


const Div = styled.div`
    display: flex;
    padding: 0 10px 0 10px;
    align-items: center;
    position: fixed;
    background-color: #9EADBA;
    height: 117px;
    width: 375px;
    bottom: 0;

    img{
        width: 48px;
        height: 72px;
        padding: 3px;
        border-radius: 3px;
        box-shadow: 0 0 3px black;
        margin-right: 16px;
    }

    h2{
        width: auto;
        height: auto;
        justify-content: left;
        font-size: 26px;
    }
`

export default Rodape
