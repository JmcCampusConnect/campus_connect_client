import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Haneef from './Haneef/App.jsx';
// import Rasak from './Rasak/App.jsx';
import Shafi from './Shafi/App.jsx';
// import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* <App /> */}
        {/* <Haneef /> */}
        {/* <Rasak /> */}
        <Shafi />
    </StrictMode>,
)
