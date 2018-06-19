import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.getNameOfMonth = this.getNameOfMonth.bind(this);
  }

  getNameOfMonth(month) {
    const nameOfMonths = {
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
    return nameOfMonths[month];
  }

  render() {
    return (
      <div className='header' id='header-position'>
          <div className='header-month'>{this.getNameOfMonth(this.props.month)}</div>
          <div className='header-year'>{this.props.year}</div>
      </div>
    )
  }
}