import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ScheduleOfTheDay from './ScheduleOfTheDay';


export default class Days extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      scheduleOfTheDay: 'loading...'
    };

    this.createTable = this.createTable.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getScheduleInfo = this.getScheduleInfo.bind(this);
  }

  getScheduleInfo(id) {
    //You can add fetch api here to get schedules for today from api you built.
    //Of course, you need to set up backend (e.g. Node.js, Express and PostgreSQL). 
    //The following variable: scheduleOfTheDay is a sample data. You enjoy BBQ every day.
    const scheduleOfTheDay = {
      1: 'BBQ', 2: 'BBQ', 3: 'BBQ', 4: 'BBQ', 5: 'BBQ', 6: 'BBQ', 7: 'BBQ', 8: 'BBQ', 9: 'BBQ', 10: 'BBQ',
      11: 'BBQ', 12: 'BBQ', 13: 'BBQ', 14: 'BBQ', 15: 'BBQ', 16: 'BBQ', 17: 'BBQ', 18: 'BBQ', 19: 'BBQ', 20: 'BBQ',
      21: 'BBQ', 22: 'BBQ', 23: 'BBQ', 24: 'BBQ', 25: 'BBQ', 26: 'BBQ', 27: 'BBQ', 28: 'BBQ', 29: 'BBQ', 30: 'BBQ', 31: 'BBQ'
    };

    return scheduleOfTheDay[id];
  }

  openModal(day, e) {
    e.preventDefault();
    const scheduleInfo = this.getScheduleInfo(day);
    this.setState({
      modalIsOpen: true,
      scheduleOfTheDay: scheduleInfo
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  createTable(year, month) {
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);
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
      <Table>
        <TableHead>
          <TableRow>
            {dayOfWeeks.map((dayOfWeek, index) => {
              if (index === 0 || index === 6) {
                return (
                  <TableCell className='holidays' numeric>{dayOfWeek}</TableCell>
                )
              } else {
                return (
                  <TableCell numeric>{dayOfWeek}</TableCell>
                )
              }
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {table.map(line => {
            return (
              <TableRow>
                {line.map((day, index) => {
                  if (year === new Date().getFullYear() && month === new Date().getMonth() && day === new Date().getDate()) {
                    if (index === 0 || index === 6) {
                      return (
                        <TableCell className='today chosenDay' numeric>
                          <div className='holidays' onClick={this.openModal.bind(this, day)}>{day}</div>
                          <ScheduleOfTheDay 
                            isOpen={this.state.modalIsOpen}
                            onAfterOpen={this.afterOpenModal}
                            onRequestClose={this.closeModal}
                            scheduleOfTheDay={this.state.scheduleOfTheDay}
                          />
                        </TableCell>
                      )
                    } else {
                      return (
                        <TableCell className='today chosenDay' numeric>
                          <div onClick={this.openModal.bind(this, day)}>{day}</div>
                          <ScheduleOfTheDay 
                            isOpen={this.state.modalIsOpen}
                            onAfterOpen={this.afterOpenModal}
                            onRequestClose={this.closeModal}
                            scheduleOfTheDay={this.state.scheduleOfTheDay}
                          />
                        </TableCell>
                      )
                    }
                  } else {
                    if (index === 0 || index === 6) {
                      return (
                        <TableCell className='chosenDay' numeric>
                          <div className='holidays' onClick={this.openModal.bind(this, day)}>{day}</div>
                          <ScheduleOfTheDay 
                            isOpen={this.state.modalIsOpen}
                            onAfterOpen={this.afterOpenModal}
                            onRequestClose={this.closeModal}
                            scheduleOfTheDay={this.state.scheduleOfTheDay}
                          />
                        </TableCell>
                      )
                    } else {
                      return (
                        <TableCell className='chosenDay' numeric>
                          <div onClick={this.openModal.bind(this, day)}>{day}</div>
                          <ScheduleOfTheDay 
                            isOpen={this.state.modalIsOpen}
                            onRequestClose={this.closeModal}
                            scheduleOfTheDay={this.state.scheduleOfTheDay}
                          />
                        </TableCell>
                      )
                    }
                  }
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    );
  }

  render() {
    return (
      <div className='days'>
        <Paper>
          {this.createTable(this.props.year, this.props.month)}
        </Paper>
      </div>
    )
  }
}