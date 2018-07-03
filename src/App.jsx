import React, { Component } from 'react';
import Header from './Header';
import Months from './Months';
import Days from './Days';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      currentView: 'calendar',
      arrayOfMonths: [
        ['January', 'February', 'March'],
        ['April', 'May', 'June'],
        ['July', 'August', 'September'],
        ['October', 'Novemver', 'December']
      ]      
    }
    this.onChangeCurrentView = this.onChangeCurrentView.bind(this);
    this.onChangeCurrentYearAndMonth = this.onChangeCurrentYearAndMonth.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrevious = this.handleClickPrevious.bind(this);
  }

  onChangeCurrentView(currentView) {
    this.setState({
      currentView
    });
  }

  onChangeCurrentYearAndMonth(year, month) {
    this.setState({
      year,
      month
    });
  }

  get currentView() {
    if (this.state.currentView === 'calendar') {
      return <Days
        year={this.state.year}
        month={this.state.month}
      />
    } else if (this.state.currentView === 'months'){
      return <Months
        arrayOfMonths={this.state.arrayOfMonths}
        onChangeCurrentView={this.onChangeCurrentView}
        onChangeCurrentYearAndMonth={this.onChangeCurrentYearAndMonth}
        year={this.state.year}
      />
    }    
  }

  handleClickPrevious() {
    if (this.state.currentView === 'months') {
      const currentYear = this.state.year;
      this.setState({
        year: currentYear - 1
      });
    } else {      
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

  }

  handleClickNext() {
    if (this.state.currentView === 'months') {
      const currentYear = this.state.year;
      this.setState({
        year: currentYear + 1
      });
    } else {
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
            currentView={this.state.currentView}
            onChangeCurrentView={this.onChangeCurrentView}
          />
        </div>
        {this.currentView}
      </div>
    )
  }
}