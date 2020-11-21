import React, { Component } from "react";
import "./Receipt.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//Receipt

//This view will display:
//Evidence of Payment

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
                <Card style={{ backgroundColor: "#d1994a", color: "#000" }}>
                  <Card.Body>
                    <Card.Text> Purchase Successful </Card.Text>
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
