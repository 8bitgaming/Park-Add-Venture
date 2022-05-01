import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

const myParks = ({}) => {
  //   if (!id.length) return <h3>No Parks Saved or Visited</h3>;

  return (
    <Container fluid>
        <Row>
            <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Yellowstone</Card.Title>
          <Card.Text>Lorem ipsem</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Visited 8/12/2020</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="primary">Primary</Button>{" "}
          <Button variant="secondary">Secondary</Button>{" "}
        </Card.Body>
      </Card>
      </Col>
      </Row>
    </Container>
  );
};

export default myParks;
