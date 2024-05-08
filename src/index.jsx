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

    console.log('filme: ', filmeSelecionado)
    console.log('sessao:', sessaoSelecionada)

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


                    <Route path="/sessao/:id" 
                        element={< MenuDeCadeiras 
                            filmeSelecionado={filmeSelecionado}
                            sessaoSelecionada={sessaoSelecionada}
                            />} 
                    />
                    <Route path="/sucesso" element={<MenuDePedidoConcluido />} />
                </Routes>
            </BrowserRouter>


        </>
    )
}


const root = createRoot(document.querySelector('.root'))
root.render(<App />)