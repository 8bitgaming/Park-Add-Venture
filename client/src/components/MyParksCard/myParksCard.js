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
              {visited && (
                <Card.Img
                  className="stamp"
                  src={visitedStamp}
                  style={{ width: "6rem", height: "6rem" }}
                />
              )}
              <Container className="container-fluid d-flex justify-content-center mt-10">
                <Button variant="success" onClick={markVisited}>
                  Visited!
                </Button>{" "}
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MyParksCard;
