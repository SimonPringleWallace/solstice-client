import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Homepage from './homepage'
import Profile from './profile'
import Header from './header/header'
import { getBillData } from './api.js'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      billData: []
    }
    this.getBillData = getBillData.bind(this)
  }
  componentDidMount = () => {
    this.getBillData()
  }
  render() {
    console.log(this.state.billData)
    return (
      <React.Fragment>
      <Header/>
      <Route exact path ='/' component={Homepage}/>
      <Route exact path ='/profile' render={() => <Profile billData={this.state.billData}/>}/>
      </React.Fragment>
    );
  }
}

export default App;
