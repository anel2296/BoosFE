import "./Login.css";
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
  Nav,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";

export class Login extends Component {
  render() {
    return (
      <div className="Login">
        <header className="Login-header">
          <Container fluid>
            <Row>
              <Col>
                <Form>
                  <Form.Label> User ID </Form.Label>
                  <Form.Control type="user ID" placeholder="Rigoberto" />
                </Form>
                <Form>
                  <Form.Label> Password </Form.Label>
                  <Form.Control type="Password" placeholder="Password" />
                </Form>
                <br></br>
                <Button
                  style={{
                    backgroundColor: "#642b09",
                    borderColor: "#642b09",
                  }}
                >
                  <Nav>
                    <NavLink style={{ color: "#FFF" }} to="/changes">
                      {" "}
                      Log In
                    </NavLink>
                  </Nav>
                </Button>
              </Col>
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
          </Container>
        </header>
      </div>
    );
  }
}

export default Login;
