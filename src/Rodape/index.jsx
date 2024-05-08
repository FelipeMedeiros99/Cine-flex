import styled from 'styled-components'

const Rodape = (props) =>{
    const { filmeSelecionado } = props
    console.log()
    return(
        <Div>
            <img src={filmeSelecionado.posterURL} alt="" />
        </Div>
    )
}


const Div = styled.div`
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
    }
`

export default Rodape
