import React, { Component } from 'react';
import Header from './Header';
import Week from './Week';
import Days from './Days';

export default class App extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className='app'>
        <Header />
        <Week />
        <Days />
      </div>
    )
  }
}