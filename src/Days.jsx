import React, { Component } from 'react';

export default class Days extends Component {
  constructor(props) {
    super(props)
    this.createTable = this.createTable.bind(this);
  }

  createTable(year, month) {
    const startDate = new Date(year, month, 1);//e.g. June 1st 2018
    const endDate = new Date(year, month + 1, 0);//e.g. June 30th 2018
    const numberOfWeeks = Math.ceil(((endDate - startDate) / (24 * 3600 * 1000) + 1) / 7) + 1;
    
    const table = [];
    for (let i = 0; i < numberOfWeeks; i += 1) {
      table.push([]);
      for (let j = 0; j < 7; j += 1) {
        if (startDate.getMonth() === month && j === startDate.getDay()) {
          table[i].push(startDate.getDate());
          startDate.setDate(startDate.getDate() + 1);
        } else {
          table[i].push(null);
        }
      }
    }

    const dayOfWeeks = ['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'];

    return (
      <table>
        <thead>
          <tr>
            {dayOfWeeks.map((dayOfWeek, index) => {
              if (index === 0 || index === 6) {
                return (
                  <th className='holidays'>{dayOfWeek}</th>                  
                )
              } else {
                return (
                  <th>{dayOfWeek}</th>
                )
              }
            })}
          </tr>
        </thead>
        <tbody>
          {table.map(line => {
            return (
              <tr>
                {line.map((day, index) => {
                  if (index === 0 || index === 6) {
                    return (
                      <td className='day holidays'>{day}</td>
                    )
                  } else if (year === new Date().getFullYear() && month === new Date().getMonth() && day === new Date().getDate()) {
                    return (
                      <td className='day today'>{day}</td>
                    )
                  } else{
                    return (
                      <td className='day'>{day}</td>
                    )
                  }
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div className='days'>
        {this.createTable(this.props.year, this.props.month)}
      </div>
    )
  }
}