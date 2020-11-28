import React from "react";
import axios from "axios";

//just get the state of the button to enable and or disable ordering
//import this into app_container which is menu view

export default class ContactInfo extends React.Component {
  state = {
    checked: false,
  };

  componentDidMount() {
    axios.get("url").then((res) => {
      console.log(res);
      this.setState({ checked: res.data });
    });
  }
}
