import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/stylecarrusel.css'
import './style/stylecategorias.css'
import './style/stylecontactenos.css'
import './style/stylefooter.css'
import './style/styleheader.css'
import './style/stylehome.css'
import './style/stylenostros.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
createRoot(document.getElementById('root')).render(

    <StrictMode>
        <BrowserRouter>
          <App />
       </BrowserRouter>
    </StrictMode>
 

)
