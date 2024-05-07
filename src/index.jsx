import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom"

import Cabecalho from "./Cabecalho";
import MenuDeFilmes from './MenuDeFilmes'
import MenuDeHorarios from './MenuDeHorarios'
import MenuDeCadeiras from "./MenuDeCadeiras";
import MenuDePedidoConcluido from './MenuDePedidoConcluido'


import './assets/reset.css'
import './assets/style.css'


//  <Link to='/'>
//  useParams(): pega elemento do link :elemento


const App = () => {
    return (
        <>  
            <BrowserRouter>
                <Cabecalho />
                <Routes>
                    <Route path="/" element={<MenuDeFilmes />} />
                    <Route path="/filme/:id" element={<MenuDeHorarios/>}/>
                    <Route path="/sessao/:id" element={< MenuDeCadeiras/>}/>
                    <Route path="/sucesso" element={<MenuDePedidoConcluido/>} /> 
                </Routes> 
            </BrowserRouter>


        </>
    )
}


const root = createRoot(document.querySelector('.root'))
root.render(<App />)