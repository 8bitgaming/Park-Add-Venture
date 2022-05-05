import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import visitedStamp from "../../images/visitedStampRotated.png";
import "./myParksCard.css";

const MyParksCard = ({ parkName, image, link, visited, dateVisited }) => {
  console.log("parkname", parkName)
  //   if (!id.length) return <h3>No Parks Saved or Visited</h3>;

  //need to add ternary to switch between visited or not visited
  return (
    <Container className="container-fluid d-flex justify-content-center mt-10 my-parks-page">
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={image}
              style={{ width: "17.9rem", height: "14rem" }}
            />
            <Card.Body className="yellow-background">
              <Card.Title className="text-center">{parkName}</Card.Title>
              <Card.Img
                      className="stamp"
                      src={visitedStamp}
                      style={{ width: "6rem", height: "6rem" }}
                    />
              <Container>
                <Row>
                  <Col>
                    <Card.Text>Visited on 7/25/2021</Card.Text>
                  </Col>
                  <Col>
                  <Button variant="success">Edit</Button>{" "}
                  </Col>
                </Row>
              </Container>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MyParksCard;
