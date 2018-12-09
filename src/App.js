import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Homepage from './homepage'
import Profile from './profile'
import Header from './header/header'
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Header/>
      <Route exact path ='/' component={Homepage}/>
      <Route exact path ='/profile' component={Profile}/>
      </React.Fragment>
    );
  }
}

export default App;
