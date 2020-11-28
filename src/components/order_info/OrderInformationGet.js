import React from "react";
import axios from "axios";

export default class OrderInformationGet extends React.Component {
  state = {
    orders: [],
  };

  componentDidMount() {
    axios.get("url").then((res) => {
      console.log(res);
      this.setState({ orders: res.data });
    });
  }

  render() {
    return (
      <ul>
        {this.state.orders.map((orders) => (
          <li key={orders.id}>{orders.name}</li>
        ))}
      </ul>
    );
  }
}
