import React, { Component } from 'react';
import Header from './Header';
import Week from './Week';
import Days from './Days';

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
    }
  }

  render(){
    return (
      <div className='app'>
        <Header 
          year={this.state.year}
          month={this.state.month}          
        />
        <Days
          year={this.state.year}
          month={this.state.month}
        />
      </div>
    )
  }
}