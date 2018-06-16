import React, { Component } from 'react';

export default class Days extends Component{
  constructor(props){
    super(props)
    this.createTable = this.createTable.bind(this); 
  }
  
  createTable(numberOfWeeks) {
    const table = [];
    for (let i = 0; i <= numberOfWeeks; i += 1) {
      table.push([]);
      for (let j = 0; j < 7; j += 1) {
        table[i].push(0);
      }
    }
    const startDate = new Date(2018, 6-1, 1);
    const endDate = new Date(2018, 6, 0);
    // startDate.getDate();
    // startDate.getDay();

    startDate.setDate(start.getDate() + 1);
    table[i][startDate.getDay()] = startDate.getDate();
    return table;
  }

  render(){
    return (
      <div className='days'>
        {this.createTable(5)}
      </div>
    )
  }
}