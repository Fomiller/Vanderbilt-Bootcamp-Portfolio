import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact'
import NavBar from './components/NavBar';
import {AppProvider} from './utils/GlobalContext';

import './App.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <NavBar/>
        <Route exact path ={["/","/home"]} component={Home}/>
        <Route exact path ="/contact" component={Contact}/>
        <Route exact path ="/portfolio" component={Portfolio}/>
      </Router>
    </AppProvider>
  );
}

export default App;
