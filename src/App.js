import React from 'react';
import Home from './Home';
import About from './About';
import Header from './Header';
import Service from './Service';
import Portfolio from './Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

function App() {
  
  return (
   <>
   <Router>
   <Header/>
     <Switch>

      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/service' component={Service} />
      <Route path='/portfolio' component={Portfolio} />
     </Switch>
   </Router>

   </>
  );
}

export default App;
