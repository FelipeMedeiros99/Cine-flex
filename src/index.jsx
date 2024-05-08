import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Cabecalho from "./Cabecalho";
import MenuDeFilmes from './MenuDeFilmes'
import MenuDeHorarios from './MenuDeHorarios'
import MenuDeCadeiras from "./MenuDeCadeiras";
import MenuDePedidoConcluido from './MenuDePedidoConcluido'

import './assets/reset.css'
import './assets/style.css'
import { useEffect, useState } from "react";


//  <Link to='/'>
//  useParams(): pega elemento do link :elemento


const App = () => {
    const [listaFilmes, setListaFilmes] = useState([])
    const [filmeSelecionado, setFilmeSelecionado] = useState([])
    const [sessaoSelecionada, setSessaoSelecionada] = useState({})
    const [informacoesDaCompra, setInformacoesDaCompra] = useState({})
    const [dadosComprador, setDadosComprador] = useState({nome:'', cpf:""})
    const [cadeirasSelecionadas, setCadeirasSelecionadas] = useState([])

    console.log('filme selecionado: ', filmeSelecionado)
    console.log('sessao selecionada: ', sessaoSelecionada)
    console.log('informacoes da compra: ', informacoesDaCompra)
    console.log('dados comprador: ', dadosComprador)
    console.log('cadeiras: ', cadeirasSelecionadas)
    console.log("_____________________________________________________")

    return (
        <>
            <BrowserRouter>
                <Cabecalho />
                <Routes>
                    <Route path="/"
                        element={<MenuDeFilmes
                            setSessaoSelecionada={setSessaoSelecionada}
                            setFilmeSelecionado={setFilmeSelecionado}
                            listaFilmes={listaFilmes}
                            setListaFilmes={setListaFilmes}
                        />}
                    />

                    <Route path={`/filme/:idDoFilme`}
                        element={<MenuDeHorarios
                            filmeSelecionado={filmeSelecionado}
                            setFilmeSelecionado={setFilmeSelecionado}
                            setSessaoSelecionada={setSessaoSelecionada}
                            sessaoSelecionada={sessaoSelecionada}
                        />}
                    />


                    <Route path="/sessao/:idHorario" 
                        element={< MenuDeCadeiras 
                            filmeSelecionado={filmeSelecionado}
                            sessaoSelecionada={sessaoSelecionada}
                            dadosComprador={dadosComprador}
                            setDadosComprador={setDadosComprador}
                            informacoesDaCompra={informacoesDaCompra}
                            setInformacoesDaCompra={setInformacoesDaCompra}
                            cadeirasSelecionadas={cadeirasSelecionadas}
                            setCadeirasSelecionadas={setCadeirasSelecionadas}
                            />} 
                    />
                    <Route path="/sucesso" 
                        element={<MenuDePedidoConcluido 
                            informacoesDaCompra={informacoesDaCompra}    
                            cadeirasSelecionadas={cadeirasSelecionadas}
                            dadosComprador={dadosComprador}
                            
                        />} 
                    />
                </Routes>
            </BrowserRouter>


        </>
    )
}


const root = createRoot(document.querySelector('.root'))
root.render(<App />)