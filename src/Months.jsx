import React, { Component } from 'react';

export default class Months extends Component{
  constructor(props){
    super(props)
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
                      <td className='month'>{month}</td>
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