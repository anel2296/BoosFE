import React, { Component } from "react";
import "./AboutUs.css";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
  Nav,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";

export class AboutUs extends Component {
  render() {
    return (
      <div className="AboutUs">
        <header className="AboutUs-header">
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
                <Card
                  style={{
                    backgroundColor: "#f2cf9d",
                    borderColor: "#642b09",
                    color: "#000",
                    height: "100%",
                  }}
                >
                  <Card.Body>
                    <Button
                      type="button"
                      style={{
                        backgroundColor: "#642b09",
                        borderColor: "#642b09",
                      }}
                      block
                    >
                      {" "}
                      <Nav className="justify-content-center">
                        <NavLink
                          style={{ color: "#FFF", width: "200px" }}
                          to="/"
                        >
                          {" "}
                          Home{" "}
                        </NavLink>
                      </Nav>
                    </Button>
                    {"  "}
                    <Card.Text> Follow Us on Facebook!</Card.Text>
                    <Link to="facebook.com/BocadoMoca/">
                      <Image
                        src="facebook.png"
                        width="150"
                        height="100"
                        fluid
                      />
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card border="dark" style={{ color: "#000", height: "100%" }}>
                  <Card.Img />
                  <Card.Body>
                    <Card.Title> About Us </Card.Title>
                    <Card.Text>
                      {" "}
                      We are a Tapas Bar and Restaurant <br></br>
                      located in Moca Puerto Rico. <br></br> Working Hours:
                    </Card.Text>
                    <Card.Title> Policies </Card.Title>
                    <Card.Text> Write Business Policies </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Image src="food1.jpg" thumbnail fluid />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default AboutUs;
