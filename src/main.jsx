import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Form from './Form.jsx'
import Tailwind from './Tailwind.jsx'
import Basic from './Basic.jsx'
import App from './App.jsx'
import App2 from './App2.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
   <>
    {/* <Form/> */}
    {/* <Basic/> */}
    {/* <Tailwind/> */}

    <BrowserRouter>
    {/* app.jsx file is default route "/" */}
        <App2/> 
    </BrowserRouter>
</>
)
