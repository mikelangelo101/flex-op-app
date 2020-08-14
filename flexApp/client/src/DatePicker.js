import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class DateNow extends Component {
  constructor(props){
      super(props);
      this.state = {
        startDate: null
      };
  }


  render() {
    const { startDate } = this.state;
    return <DatePicker selected={startDate}
                       onChange={this.handleChange}
                       placeholderText={this.props.placeholderText} />;
  }

  handleChange = startDate => {
    this.setState({
      startDate
    }, () => {
        if (this.props.placeholderText === "Choose Start Date")
              this.props.getStartDate(this.state.startDate)
        else if(this.props.placeholderText === "Choose Operation Date" )
               this.props.getOperationDate(this.state.startDate)
        else  this.props.getEndDate(this.state.startDate)
    });
  };
}

export default DateNow;