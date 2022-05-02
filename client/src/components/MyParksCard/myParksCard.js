import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import visitedStamp from '../../images/visitedStampRotated.png'

const MyParksCard = ({}) => {
  //   if (!id.length) return <h3>No Parks Saved or Visited</h3>;

  return (
    <Container className="container-fluid d-flex justify-content-center mt-10">
        <Row>
            <Col>
      <Card style={{ width: "18rem"}}>
        <Card.Body className="yellow-background">
          <Card.Title>Yellowstone</Card.Title>
          <Card.Img variant="top" src={visitedStamp} style={{ width: "5rem", height: "5rem" }} />
          <Card.Text>Visited!</Card.Text>
        </Card.Body>
        <Card.Body>
          <Button variant="primary">Edit</Button>{" "}
        </Card.Body>
      </Card>
      </Col>
      </Row>
    </Container>
  );
};

export default MyParksCard;
