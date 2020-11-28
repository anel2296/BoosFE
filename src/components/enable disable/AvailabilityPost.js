import React from "react";
import axios from "axios";

//import into Schedule Info Change view

export default class ContactInfoPost extends React.Component {
  state = {
    checked: "false",
  };

  handleChange = (event) => {
    this.setState({ checked: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      checked: this.state.checked,
    };
    axios.post("url", { user }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  //render in a toggle button

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Contact Information:
        <label>
          <input
            type="checkbox"
            checked="checked"
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}
