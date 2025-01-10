import React from 'react';
import Main from './Home Page/Main'
import Login from './Auth/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() 
{
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path = '/login' element = { <Login /> } />
                </Routes>
            </Router>
        </div>
    )
}

export default App