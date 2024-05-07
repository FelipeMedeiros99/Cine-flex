import { createRoot } from "react-dom/client";

import Cabecalho from "./Cabecalho";

import './assets/reset.css'
import './assets/style.css'


const App = () => {
    return (
        <>  
            <Cabecalho />

        </>
    )
}


const root = createRoot(document.querySelector('.root'))
root.render(<App />)