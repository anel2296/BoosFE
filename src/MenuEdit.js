import React, { Component } from "react";
import "./MenuEdit.css";
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

export class MenuEdit extends Component {
  render() {
    return (
      <div className="MenuEdit">
        <header className="MenuEdit-header">
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
                    <Card.Text> Manage Your Menu! </Card.Text>
                    <Button class="with-margin">Add Items</Button>
                    <Button class="with-margin">Modify Items</Button>
                    <Button class="with-margin">Remove Items</Button>
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

export default MenuEdit;
