import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles'
import {AppProvider} from './utils/GlobalContext';
import Home from './pages/home';
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
          <Route exact path ={["/","/home"]} component={Home}/>
          <Route exact path ="/portfolio" component={Portfolio}/>
        </Router>
        <SimpleBottomNavigation/>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
