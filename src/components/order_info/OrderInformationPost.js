import React from "react";
import axios from "axios";

export default class OrderInformationPost extends React.Component {
  state = {
    id: "",
    name: "",
    price: "",
    time: "",
    units: "",
  };

  handleChange = (event) => {
    this.setState({ id: event.target.value });
    this.setState({ name: event.target.value });
    this.setState({ price: event.target.value });
    this.setState({ time: event.target.value });
    this.setState({ units: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const order = {
      id: this.state.id,
      name: this.state.name,
      price: this.state.price,
      time: this.state.time,
      units: this.state.units,
    };

    //I need to post Items in Cart list
    axios.post("url", { order }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };
}
