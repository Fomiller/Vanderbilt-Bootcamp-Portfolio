import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles'
import {AppProvider} from './utils/GlobalContext';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact'
import Portfolio from './pages/portfolio';
import NavBar from './components/NavBar';
import PortfolioTheme from './utils/theme'
import SimpleBottomNavigation from './components/Footer';



function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={PortfolioTheme}>
        <Router>
          <NavBar/>
          <Route exact path ={[process.env.PUBLIC_URL + "/", process.env.PUBLIC_URL + "/home"]} component={Home}/>
          <Route exact path ={process.env.PUBLIC_URL + "/about"} component={About}/>
          <Route exact path ={process.env.PUBLIC_URL + "/portfolio"} component={Portfolio}/>
        </Router>
        <SimpleBottomNavigation/>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
