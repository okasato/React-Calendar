import React, { Component } from 'react';

export default class Week extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className='week'>
        SUN, MON, TUE, WED, THR, FRI, SAT 
      </div>
    )
  }
}