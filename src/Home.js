import "./Home.css";
import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Nav,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";

export class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <Container fluid>
            <Row>
              <Col>
                <img
                  src="bocado.png"
                  alt="Bocado Logo"
                  width="250"
                  height="200"
                />
              </Col>
            </Row>

            <Row>
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
                          to="/menu"
                        >
                          {" "}
                          Menu{" "}
                        </NavLink>
                      </Nav>
                    </Button>
                    {"  "}
                    <Button
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
                          to="/aboutUs"
                        >
                          {" "}
                          About Us{" "}
                        </NavLink>
                      </Nav>
                    </Button>{" "}
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
                    <Card.Title> WELCOME TO BOCADO </Card.Title>
                    <Card.Text>
                      {" "}
                      We are a Tapas Bar and Restaurant located in Moca Puerto
                      Rico. <br></br> <br></br>{" "}
                      <div style={{ textAlign: "left" }}>
                        <Card.Title>Working Hours:</Card.Title>
                        Thursday - Sunday <br></br> from 4pm to 9pm{" "}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Image src="food1.jpg" rounded fluid></Image>
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default Home;
