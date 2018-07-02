import React, { Component } from 'react';

export default class Months extends Component{
  constructor(props){
    super(props)
    this.handleClickMonth = this.handleClickMonth.bind(this);
  }

  handleClickMonth() {
    console.log('hey month');
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
                    return (                      
                      <td className='month' onClick={this.handleClickMonth}>{month}</td>
                    )
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