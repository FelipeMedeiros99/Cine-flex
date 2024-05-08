import Rodape from "../Rodape"

const MenuDeCadeiras = (props) =>{
    const {
        filmeSelecionado,
        sessaoSelecionada,
    } = props
    return(
        <>
            <p>
                Cadeiras
            </p> 

            <Rodape
                filmeSelecionado={filmeSelecionado}
                sessaoSelecionada={sessaoSelecionada}
            />
        </>
    )
} 

export default MenuDeCadeiras