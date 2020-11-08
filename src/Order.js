import React, { Component } from "react";
import "./Order.css";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Dropdown,
  ButtonGroup,
  Form,
  Nav,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";

export class Order extends Component {
  render() {
    return (
      <div className="Order">
        <header className="Order-header">
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
            <Row class="body">
              <Col>
                <Dropdown as={ButtonGroup}>
                  <Button
                    style={{
                      backgroundColor: "#642b09",
                      borderColor: "#642b09",
                    }}
                  >
                    Payment Method
                  </Button>
                  <Dropdown.Toggle
                    split
                    variant="success"
                    id="dropdown-split-basic"
                  />
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">ATH Movil</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Square</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col>
                <Card style={{ color: "#000" }}>
                  <Card.Img />
                  <Card.Body>
                    <Card.Title> Process Payment </Card.Title>
                    <Card.Text>
                      {" "}
                      Payment Module Should Appear Here <br></br>
                      Depending on Chosesn <br></br> Payment Method
                    </Card.Text>
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

export default Order;
