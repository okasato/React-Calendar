import React, { Component } from 'react';

export default class Months extends Component{
  constructor(props){
    super(props)
    this.getNumberOfMonth = this.getNumberOfMonth.bind(this);
    this.handleClickMonth = this.handleClickMonth.bind(this);
  }

  getNumberOfMonth(nameOfMonth) {
    const numberOfMonths = {
      'January': 0,
      'February': 1,
      'March': 2,
      'April': 3,
      'May': 4,
      'June': 5,
      'July': 6,
      'August': 7,
      'September': 8,
      'October': 9,
      'Novemver': 10,
      'December': 11
    };
    return numberOfMonths[nameOfMonth];
  }

  handleClickMonth(e) {
    e.preventDefault();
    const numberOfChosenMonth = this.getNumberOfMonth(e.target.innerHTML); 
    this.props.onChangeCurrentView('calendar');
    this.props.onChangeCurrentYearAndMonth(this.props.year, numberOfChosenMonth);
  }

  render(){
    return (
      <div className='months'>
        <table>
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            {this.props.arrayOfMonths.map(months => {
              return (
                <tr>
                  {months.map(month => {
                    if (this.getNumberOfMonth(month) === new Date().getMonth()) {
                      return (                      
                        <td className='month thisMonth' onClick={this.handleClickMonth}>{month}</td>
                      )
                    } else {
                      return (                      
                        <td className='month' onClick={this.handleClickMonth}>{month}</td>
                      )
                    }
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}