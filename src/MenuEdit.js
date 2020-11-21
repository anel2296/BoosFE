import React, { Component } from "react";
import "./MenuEdit.css";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";

export class MenuEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", price: "", time: "", item: "", delItem: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleSubmit3 = this.handleSubmit3.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.setState({ price: event.target.price });
    this.setState({ time: event.target.time });
  }

  handleChange2(event) {
    this.setState({ item: event.target.item });
  }

  handleChange3(event) {
    this.setState({ delItem: event.target.delItem });
  }

  handleSubmit(event) {
    alert(
      "Name Submitted Was: " +
        this.state.value +
        "And Price Was: " +
        this.state.price +
        " at preparing time: " +
        this.state.time
    );
    event.preventDefault();
  }

  handleSubmit2(event) {
    alert("Selected Item: " + this.state.item);
    event.preventDefault();
  }

  handleSubmit3(event) {
    alert("Deleted Item: " + this.state.delItem);
    event.preventDefault();
  }

  render() {
    return (
      <div className="MenuEdit">
        <header className="MenuEdit-header">
          <Container fluid>
            <Row class="with-margin">
              <Col>
                <img
                  src="bocado.png"
                  alt="Bocado Logo"
                  width="250"
                  height="200"
                  class="logo.center"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Card border="#000" style={{ color: "#000" }}>
                  <Card.Body>
                    <Card.Text> Add To Menu </Card.Text>
                    <form onSubmit={this.handleSubmit}>
                      <label>
                        Name:
                        <input
                          type="text"
                          value={this.state.value}
                          onChange={this.handleChange}
                        />
                      </label>
                      <label>
                        Price:
                        <input
                          type="text"
                          value={this.state.price}
                          onChange={this.handleChange}
                        />
                      </label>
                      <label>
                        Prepare Time:
                        <input
                          type="text"
                          time={this.state.time}
                          onChange={this.handleChange}
                        />
                      </label>
                      <input type="submit" value="Add" />
                    </form>
                    {/* <Button variant="success" class="with-margin">
                      Add
                    </Button> */}
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card border="#000" style={{ color: "#000" }}>
                  <Card.Body>
                    <Card.Text> Modify Menu </Card.Text>
                    <form onSubmit={this.handleSubmit2}>
                      <label>
                        Pick item:
                        <select
                          item={this.state.item}
                          onChange={this.handleChange2}
                        >
                          <option item="Plate1">Rice</option>
                          <option item="Plate2">Mofongo</option>
                          <option item="Plate3">Nachos</option>
                          <option item="Plate4">Empanadillas</option>
                        </select>
                      </label>
                      <input type="submit" value="Modify" />
                    </form>
                    {/* <Button class="with-margin">Add Items</Button> */}
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card border="#000" style={{ color: "#000" }}>
                  <Card.Body>
                    <Card.Text> Delete From Menu </Card.Text>
                    <form onSubmit={this.handleSubmit3}>
                      <label>
                        Delete Item:
                        <select
                          delItem={this.state.delItem}
                          onChange={this.handleChange3}
                        >
                          <option delItem="Plate1">Rice</option>
                          <option delItem="Plate2">Mofongo</option>
                          <option delItem="Plate3">Nachos</option>
                          <option delItem="Plate4">Empanadillas</option>
                        </select>
                      </label>
                      <input type="submit" value="Delete" />
                    </form>
                    {/* <Button variant="danger" class="with-margin">
                      Remove Items
                    </Button> */}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default MenuEdit;
