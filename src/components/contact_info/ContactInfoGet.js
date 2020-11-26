import React from "react";
import axios from "axios";

export default class ContactInfoGet extends React.Component {
  state = {
    email: "",
    phone: "",
  };

  handleChange = (event) => {
    this.setState({ email: event.target.value });
    this.setState({ phone: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      phone: this.state.phone,
    };
    axios.post("url", { user }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Contact Information:
          <input type="text" email="email" onChange={this.handleChange} />
          <input type="text" phone="phone" onChange={this.handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}
