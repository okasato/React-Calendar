import React, { Component } from 'react';

export default class Header extends Component{
  constructor(props){
    super(props)
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
    }
    this.getMonth = this.getMonth.bind(this);
  }

  getMonth(month) {
    const months = {
      0: 'January',
      1: 'February',
      2: 'March',
      3: 'April',
      4: 'May',
      5: 'June',
      6: 'July',
      7: 'August',
      8: 'September',
      9: 'October',
      10: 'Novemver',
      11: 'December'
    };
    return months[month];
  }

  render(){
    return (
      <div className='header'>
        <div>{this.state.year}</div>
        <div>{this.getMonth(this.state.month)}</div> 
      </div>
    )
  }
}