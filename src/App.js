import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import mockCats from './mockCats.js'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      cats: mockCats
    }
  }


  render() {
    return (
      <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/catedit" component={CatEdit} />
          <Route path="/catindex" component={CatIndex} />
          <Route path="/catnew" component={CatNew} />
          <Route path="/catshow" component={CatShow} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
      </div>
    );
  }
}

export default App;

