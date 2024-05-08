import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Cabecalho from "./Cabecalho";
import MenuDeFilmes from './MenuDeFilmes'
import MenuDeHorarios from './MenuDeHorarios'
import MenuDeCadeiras from "./MenuDeCadeiras";
import MenuDePedidoConcluido from './MenuDePedidoConcluido'
import Rodape from "./Rodape"

import './assets/reset.css'
import './assets/style.css'
import { useState } from "react";


//  <Link to='/'>
//  useParams(): pega elemento do link :elemento


const App = () => {
    const [listaFilmes, setListaFilmes] = useState([])
    const [filmeSelecionado, setfilmeSelecionado] = useState([])



    return (
        <>
            <BrowserRouter>
                <Cabecalho />
                <Routes>
                    <Route path="/"
                        element={<MenuDeFilmes
                            listaFilmes={listaFilmes}
                            setListaFilmes={setListaFilmes}
                        />}
                    />

                    <Route path={`/filme/:idDoFilme`}
                        element={<MenuDeHorarios
                            filmeSelecionado={filmeSelecionado}
                            setfilmeSelecionado={setfilmeSelecionado}
                        />}
                    />


                    <Route path="/sessao/:id" element={< MenuDeCadeiras />} />
                    <Route path="/sucesso" element={<MenuDePedidoConcluido />} />
                </Routes>

                <Rodape
                    filmeSelecionado={filmeSelecionado}
                />
            </BrowserRouter>


        </>
    )
}


const root = createRoot(document.querySelector('.root'))
root.render(<App />)