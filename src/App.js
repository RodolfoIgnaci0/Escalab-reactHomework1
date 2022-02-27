import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Index from './pages/index';
import Gallery from './pages/gallery';

import Header from './components/header';
import Footer from './components/footer';

import './assets/css/styles.css'


class App extends React.Component{
  constructor(){
    super();

    this.state = {};
  }

  render() {
    return (
      <Router>
        <Header />
        
        <hr />

        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;