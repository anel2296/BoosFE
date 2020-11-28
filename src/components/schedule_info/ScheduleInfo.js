import React from "react";
import axios from "axios";
import Select from "react-select";

export default class ScheduleInfo extends React.Component {
  state = {
    week: [],
  };

  componentDidMount() {
    axios.get("url").then((res) => {
      console.log(res);
      this.setState({ week: res.data });
    });
  }

  render() {
    return (
      <Select
        className="basic-single"
        classNamePrefix="select"
        options={this.state.days.map((week) => (
          <li key={week.id}>{week.day}</li>
        ))}
      />
    );
  }
}
