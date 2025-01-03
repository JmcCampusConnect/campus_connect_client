import React from 'react';
import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom';
import Main from './Shafi/Home Page/Main'
import Login from './Shafi/Login Page/Login';

function App() 
{
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main/>} />   
                <Route path='login' element={<Login/>} />   
        </Routes>
        </Router>
    )
}

export default App