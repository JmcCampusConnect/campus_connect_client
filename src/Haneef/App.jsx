import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Home Page/Main';
import Login from './Sign Login/Main';

function App() 
{
    return (
        <Router>
            <Routes>
                <Route path = '/' element = { <HomePage /> } />
                <Route path = '/login' element = { <Login /> } />
            </Routes>
        </Router>
    )
}

export default App;