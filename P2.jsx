import React, { Component } from 'react';

class LeapYearChecker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: '',
      isLeapYear: null
    };
  }

  handleChange = (event) => {
    this.setState({ year: event.target.value });
  };

  checkLeapYear = () => {
    const year = parseInt(this.state.year, 10);
    let isLeapYear = false;

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      isLeapYear = true;
    }

    this.setState({ isLeapYear });
  };

  render() {
    return (
      <div>
        <h1>Leap Year Checker</h1>
        <input
          type="number"
          value={this.state.year}
          onChange={this.handleChange}
          placeholder="Enter a year"
        />
        <button onClick={this.checkLeapYear}>Check</button>
        {this.state.isLeapYear !== null && (
          <p>
            {this.state.year} is {this.state.isLeapYear ? 'a' : 'not a'} leap year.
          </p>
        )}
      </div>
    );
  }
}

export default LeapYearChecker;
