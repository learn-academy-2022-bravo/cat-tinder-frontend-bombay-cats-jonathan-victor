import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

import CatEdit from './pages/CatEdit'
import CatIndex from './pages/CatIndex'
import CatNew from './pages/CatNew'
import CatShow from './pages/CatShow'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: []
    }
  }

  componentDidMount(){
    this.readCat()
  }

  readCat = () => {
    fetch("http://localhost:3000/cats")
    .then(response => response.json())
    .then(catsArray => this.setState({cats: catsArray}))
    .catch(errors => console.log("Cat read errors:", errors))
  }

  createCat = (newCat) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(newCat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(() => this.readCat())
    .catch(errors => console.log("Cat create errors:", errors))
  }

  updateCat = (cat, id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      body: JSON.stringify(cat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json())
    .then(() => this.readCat())
    .catch(errors => console.log("Cat update errors:", errors))
  }

  deleteCat = (id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json())
    .then(() => this.readCat())
    .catch(errors => console.log("delete errors:", errors))
  }
  
  render() {
    console.log(this.state.cats)
    return(
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/catindex" render={(props) => <CatIndex cats={this.state.cats} />} />
          <Route path="/catedit" component={CatEdit} />
          <Route path="/catnew" render={(props) => <CatNew createCat={this.createCat} />} />
          <Route path="/catshow/:id" render={(props) => {
            let id = props.match.params.id
            let cat = this.state.cats.find(cat => cat.id === +id)
            return <CatShow cat={cat} />
          }} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}
export default App

