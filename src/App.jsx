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
    this.changeCurrentView = this.changeCurrentView.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrevious = this.handleClickPrevious.bind(this);
  }

  changeCurrentView(currentView) {
    this.setState({
      currentView
    })
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
      />
    }    
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
    console.log(this.state.currentView);
    return (
      <div className='app'>
        <div className='top'>
          <button className='previous' onClick={this.handleClickPrevious}>{'<'}</button>
          <button className='next' onClick={this.handleClickNext}>{'>'}</button>
          <Header
            year={this.state.year}
            month={this.state.month}
            currentView={this.state.currentView}
            changeCurrentView={this.changeCurrentView}
          />
        </div>
        {this.currentView}
      </div>
    )
  }
}