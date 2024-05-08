import styled from "styled-components"
import Rodape from "../Rodape"

const MenuDeCadeiras = (props) => {
    const {
        filmeSelecionado,
        sessaoSelecionada,
    } = props
    return (
        <>
            <Div>
                <h2>
                    Cadeiras
                </h2>
            </Div>

            <Rodape
                filmeSelecionado={filmeSelecionado}
                sessaoSelecionada={sessaoSelecionada}
            />
        </>
    )
}


const Div = styled.div`
    padding: 67px 0 117px 0;
    height: 100%;
    width: 375px;

`


export default MenuDeCadeiras