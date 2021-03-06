import React, { Component } from "react";
import "./InfoEdit.css";
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
import ContactInfoPost from "./components/contact_info/ContactInfoPost";

export class InfoEdit extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { value: "" };

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({ value: event.target.value });
  // }

  // handleSubmit(event) {
  //   alert("Opens from: " + this.state.value);
  //   event.preventDefault();
  // }

  render() {
    return (
      <div className="InfoEdit">
        <header className="InfoEdit-header">
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
                <Card style={{ color: "#000" }}>
                  <Card.Body>
                    <Card.Text> Information Edit</Card.Text>
                    {/* <form onSubmit={this.handleSubmit}>
                      <label>
                        Contact Information:
                        <textarea
                          value={this.state.value}
                          onChange={this.handleChange}
                        />
                      </label>
                      <input type="submit" value="Submit" />
                    </form> */}

                    <ContactInfoPost />
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

export default InfoEdit;
