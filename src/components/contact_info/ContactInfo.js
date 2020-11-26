import React from "react";
import axios from "axios";

export default class ContactInfo extends React.Component {
  state = {
    contactInfo: [],
  };

  componentDidMount() {
    axios.get("url").then((res) => {
      console.log(res);
      this.setState({ contactInfo: res.data });
    });
  }

  render() {
    return (
      <ul>
        {this.state.contactInfo.map((contactInfo) => (
          <li key={contactInfo.id}>{contactInfo.phoneNumber}</li>
        ))}
      </ul>
    );
  }
}
