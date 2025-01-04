import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Define from './Home Page/Components/Define';
import Login from './Home Page/Components/Nav';
import Main from './Home Page/Main';

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Define/>} />
            <Route path='login' element={<Login/>} />
            <Route path='Main' element={<Main/>} />
        </Routes>
    </Router>

  )
}

export default App