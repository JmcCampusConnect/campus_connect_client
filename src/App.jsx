import React from 'react';
import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom';
import Define from './Shafi/Home Page/Components/Define';
import Login from './Shafi/Home Page/Components/Nav';

function App() 
{
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Define/>} />   
                <Route path='login' element={<Login/>} />   
        </Routes>
        </Router>
    )
}

export default App