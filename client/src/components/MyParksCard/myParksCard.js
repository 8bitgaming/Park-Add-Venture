import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import visitedStamp from "../../images/visitedStampRotated.png";
import "./myParksCard.css";
import { useMutation } from "@apollo/client";
import { UDPATE_PARK } from "../../utils/mutation";

const MyParksCard = ({ parkId, parkName, image, link, visited, dateVisited }) => {
  const [recordVisit, setRecordVisit] = useState({
    parkId: parkId,
    visited: visited
  })
  const [updatePark, { error }] = useMutation(UDPATE_PARK);

  const markVisited = async (parkId) => {
    setRecordVisit({...recordVisit, visited: !visited})
    console.log("visited", recordVisit.visited)
    try {
      const { data } = await updatePark({
        variables: { ...recordVisit },
      });
      
      } catch (e) {
      console.error(e);
    }
    
  };
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
              {visited && (
                <Card.Img
                  className="stamp"
                  src={visitedStamp}
                  style={{ width: "6rem", height: "6rem" }}
                />
              )}
              <Container>
                <Button variant="success" value={parkId} onClick={e => markVisited(e.target.value)}>Visited!</Button>{" "}
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MyParksCard;
