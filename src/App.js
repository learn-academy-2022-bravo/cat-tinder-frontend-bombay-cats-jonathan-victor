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
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;

