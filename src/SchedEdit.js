import React, { Component } from "react";
import "./SchedEdit.css";
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
import BootstrapSwitchButton from "bootstrap-switch-button-react";

export class SchedEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { opDay: "", clDay: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ opDay: event.target.opDay });
    this.setState({ clDay: event.target.clDay });
  }

  handleSubmit(event) {
    alert("Opens from: " + this.state.opDay + "Until : " + this.state.clDay);
    event.preventDefault();
  }

  render() {
    return (
      <div className="SchedEdit">
        <header className="SchedEdit-header">
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
                    <Card.Text> Enable - Disable Service</Card.Text>
                    <BootstrapSwitchButton
                      checked={false}
                      onlabel="Enabled"
                      offlabel="Disabled"
                      onstyle="warning"
                      offstyle="outline-warning"
                      width={150}
                    />
                  </Card.Body>
                </Card>
                <Card border="#000" style={{ color: "#000" }}>
                  <Card.Body>
                    <Card.Text> Working Days </Card.Text>
                    <form onSubmit={this.handleSubmit}>
                      <label>
                        Opening Day:
                        <input
                          type="text"
                          value={this.state.opDay}
                          onChange={this.handleChange}
                        />
                      </label>
                      <label>
                        Closing Day:
                        <input
                          type="text"
                          value={this.state.clDay}
                          onChange={this.handleChange}
                        />
                      </label>
                      <input type="submit" value="Save" />
                    </form>
                    {/* <Button variant="success" class="with-margin">
                      Add
                    </Button> */}
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ color: "#000" }}>
                  <Card.Body>
                    <Form>
                      <Form.Label> Opening time </Form.Label>
                      <Form.Control type="Time" placeholder="4:00PM" />
                    </Form>
                    <Form>
                      <Form.Label> Closing time </Form.Label>
                      <Form.Control type="Time" placeholder="9:00PM" />
                    </Form>
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

export default SchedEdit;
