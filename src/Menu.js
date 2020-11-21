import React, { Component } from "react";
import "./Menu.css";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Nav,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";

//Menu View

// This view will display:
//Category choose button
//Present Items will be sorted by category
//Order summary

export class Menu extends Component {
  constructor() {
    super();

    this.state = {
      dropDownValue: "Select Item Category",
    };
  }

  changeValue(text) {
    this.setState({ dropDownValue: text });
  }

  render() {
    return (
      <div className="Menu">
        <header className="Menu-header">
          <Container>
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
              <DropdownButton
                id="dropdown-item-button"
                title={this.state.dropDownValue}
                className="format"
                class="gold-outline-button"
              >
                <Dropdown.Item as="button" style={{ backgroundColor: "#FFF" }}>
                  <div onClick={(e) => this.changeValue(e.target.textContent)}>
                    Plates
                  </div>
                </Dropdown.Item>
                <Dropdown.Item as="button">
                  <div onClick={(e) => this.changeValue(e.target.textContent)}>
                    Beverages
                  </div>
                </Dropdown.Item>
                <Dropdown.Item as="button">
                  <div onClick={(e) => this.changeValue(e.target.textContent)}>
                    Desserts
                  </div>
                </Dropdown.Item>
              </DropdownButton>
            </Row>
            <Row>
              <Col xs={8}></Col>
              <Col>
                <Card border="dark" style={{ color: "#000", height: "200%" }}>
                  <Card.Body>
                    <Card.Title> Order Summary</Card.Title>
                    <Card.Text> Get Plate ID and Get Price </Card.Text>
                    <Button
                      style={{
                        backgroundColor: "#642b09",
                        borderColor: "#642b09",
                      }}
                      block
                    >
                      <Nav className="justify-content-center">
                        <NavLink
                          style={{ color: "#FFF", width: "200px" }}
                          to="/ordering"
                        >
                          Order
                        </NavLink>
                      </Nav>
                    </Button>
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

export default Menu;
