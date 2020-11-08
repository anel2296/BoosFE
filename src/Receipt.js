import React, { Component } from "react";
import "./Receipt.css";
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
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";

export class Receipt extends Component {
  render() {
    return (
      <div className="Receipt">
        <header className="Receipt-header">
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
                <Card style={{ backgroundColor: "#d1994a", color: "#d1994a" }}>
                  <Card.Body>
                    <Card.Text> Purchase Summary </Card.Text>
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

export default Receipt;
