import React from 'react';

// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Home from './components/Home';

// Styles
import { GlobalStyle } from './GlobalStyles';

const App = () => (
  <Router>
    <Routes>
        <Route path='/' element={<Home />}/>
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;
