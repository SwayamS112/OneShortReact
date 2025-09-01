import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Form from './Form.jsx'
import Tailwind from './Tailwind.jsx'
import Basic from './Basic.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
   <>
    {/* <Form/> */}
    {/* <Basic/> */}
    {/* <Tailwind/> */}
    <App/>
</>
)
