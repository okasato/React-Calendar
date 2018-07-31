import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

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
        <Table>
          <TableBody>
            {this.props.arrayOfMonths.map(months => {
              return (
                <TableRow>
                  {months.map(month => {
                    if (this.props.year === new Date().getFullYear() && this.getNumberOfMonth(month) === new Date().getMonth()) {
                      return (                      
                        <TableCell className='month-tableCell thisMonth'>
                          <div className='month' onClick={this.handleClickMonth}>                            
                            {month}
                          </div>
                        </TableCell>
                      )
                    } else {
                      return (                      
                        <TableCell className='month-tableCell'>
                          <div className='month' onClick={this.handleClickMonth}>
                            {month}
                          </div>
                        </TableCell>
                      )
                    }
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    )
  }
}