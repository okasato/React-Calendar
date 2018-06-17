import React, { Component } from 'react';
import Header from './Header';
import Week from './Week';
import Days from './Days';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
    }
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrevious = this.handleClickPrevious.bind(this);
  }

  handleClickPrevious() {
    const currentMonth = this.state.month;
    this.setState({
      month: currentMonth - 1
    });
    
    console.log('@@@@@@@@@@@@@@@@@@', this.state.month);
    if (this.state.month < 0) {
      const currentYear = this.state.year;
      this.setState({
        month: 11,
        year: currentYear - 1
      })
    }
  }

  handleClickNext() {
    const currentMonth = this.state.month;
    this.setState({
      month: currentMonth + 1
    });
    
    console.log('@@@@@@@@@@@@@@@@@@', this.state.month);
    if (this.state.month > 11) {
      const currentYear = this.state.year;
      this.setState({
        month: 0,
        year: currentYear + 1
      })
    }
  }

  render() {
    return (
      <div className='app'>
        <div style={{ display: 'flex'}}>
          <button onClick={this.handleClickPrevious}>{'<'}</button>
          <button onClick={this.handleClickNext}>{'>'}</button>
          <Header
            year={this.state.year}
            month={this.state.month}
          />
        </div>
        <Days
          year={this.state.year}
          month={this.state.month}
        />
      </div>
    )
  }
}