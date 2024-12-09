import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Haneef from './Haneef/App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
        {/* <Haneef /> */}
    </StrictMode>,
)
