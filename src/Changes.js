import "./Changes.css";
import React, { Component } from "react";
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
  ButtonGroup,
  Nav,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import Image from "react-bootstrap/Image";

//Admin Home
//This view will display:
// Four sections that will route the administrator to the different change options and orders made

export class Changes extends Component {
  render() {
    return (
      <div className="Changes">
        <header className="Changes-header">
          <Container>
            <Row>
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
            <Row> Administrator Changes: </Row>
            <Row>
              <Col>
                <Card
                  style={{
                    color: "#000",
                    borderColor: "#642b09",
                    height: "100%",
                  }}
                >
                  <Card.Body>
                    <Card.Title> Item Changes</Card.Title>
                    <Card.Text>
                      {" "}
                      Add and Remove and Modify
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
                            to="/menuEdit"
                          >
                            {" "}
                            Menu Changes{" "}
                          </NavLink>
                        </Nav>
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  style={{
                    color: "#000",
                    borderColor: "#642b09",
                    height: "100%",
                  }}
                >
                  <Card.Body>
                    <Card.Title> Availability Changes </Card.Title>
                    <Card.Text> Enable Disable Operations </Card.Text>
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
                          to="/schedEdit"
                        >
                          {" "}
                          Schedule Changes{" "}
                        </NavLink>
                      </Nav>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  style={{
                    color: "#000",
                    borderColor: "#642b09",
                    heigth: "100%",
                  }}
                >
                  <Card.Body>
                    <Card.Title> General Information Changes</Card.Title>
                    <Card.Text>
                      {" "}
                      Change information in the Home and About Us Pages{" "}
                    </Card.Text>
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
                          to="/infoEdit"
                        >
                          {" "}
                          Information Changes{" "}
                        </NavLink>
                      </Nav>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>{" "}
              <Col>
                <Card
                  style={{
                    color: "#000",
                    borderColor: "#642b09",
                    heigth: "100%",
                  }}
                >
                  <Card.Body>
                    <Card.Title> Orders View </Card.Title>
                    <Card.Text> Review Orders made and cancelled </Card.Text>
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
                          to="/adminOrder"
                        >
                          {" "}
                          Orders Created{" "}
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

export default Changes;
