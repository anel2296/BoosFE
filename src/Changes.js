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
                <Card style={{ color: "#000" }}>
                  <Card.Body>
                    <Card.Title> Item Changes</Card.Title>
                    <Card.Text>
                      {" "}
                      Add and Remove and Modify
                      <Button>
                        <Nav>
                          <NavLink style={{ color: "#000" }} to="/menuEdit">
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
                <Card style={{ color: "#000" }}>
                  <Card.Body>
                    <Card.Title> Availability Changes </Card.Title>
                    <Card.Text> Enable Disable Operations </Card.Text>
                    <Button>
                      <Nav>
                        <NavLink style={{ color: "#000" }} to="/schedEdit">
                          {" "}
                          Schedule Changes{" "}
                        </NavLink>
                      </Nav>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ color: "#000" }}>
                  <Card.Body>
                    <Card.Title> General Information Changes</Card.Title>
                    <Card.Text> About Us and Maybe Pictures? </Card.Text>
                    <Button>
                      <Nav>
                        <NavLink style={{ color: "#000" }} to="/infoEdit">
                          {" "}
                          Information Changes{" "}
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
