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

    if (this.state.month < 1) {
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
    
    if (this.state.month > 10) {
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
        <div className='top'>
          <button className='previous' onClick={this.handleClickPrevious}>{'<'}</button>
          <button className='next' onClick={this.handleClickNext}>{'>'}</button>
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