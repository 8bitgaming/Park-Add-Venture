import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import visitedStamp from "../../images/visitedStampRotated.png";
import "./myParksCard.css";
import { useQuery } from "@apollo/client";

const MyParksCard = ({ parkName, image, link, visited, dateVisited }) => {
  const markVisited = () => {};
  // useEffect(() => {
  //   async function getCart() {
  //     const cart = await idbPromise('cart', 'get');
  //     dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
  //   }

  //   if (!state.cart.length) {
  //     getCart();
  //   }
  // }, [state.cart.length, dispatch]);

  return (
    <Container>
      <Row>
        <Col className="container-fluid d-flex justify-content-center mt-10 my-parks-page">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={image}
              style={{ width: "100%", height: "14rem" }}
            />
            <Card.Body className="yellow-background">
              <Card.Title className="text-center">{parkName}</Card.Title>
              <Card.Img
                      className="stamp"
                      src={visitedStamp}
                      style={{ width: "5rem", height: "5rem" }}
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
