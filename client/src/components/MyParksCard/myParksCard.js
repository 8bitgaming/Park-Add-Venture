import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import visitedStamp from "../../images/visitedStampRotated.png";
import "./myParksCard.css";
import { useMutation } from "@apollo/client";
import { UDPATE_PARK } from "../../utils/mutation";

const MyParksCard = ({
  parkId,
  parkName,
  image,
  link,
  visited,
  dateVisited,
}) => {
  const [recordVisit, setRecordVisit] = useState({
    parkId: parkId,
    visited: visited,
  });

  console.log("visited on load", recordVisit);
  const [updatePark, { error }] = useMutation(UDPATE_PARK);

  const markVisited = async (e) => {
    let visitToggle = !recordVisit.visted
    console.log("visited after button click", visitToggle);
    setRecordVisit({ ...recordVisit, visited: visitToggle });
    console.log("visited after button click", recordVisit);
    try {
      const { data } = await updatePark({
        variables: { ...recordVisit },
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {}, [recordVisit]);

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
              {recordVisit.visited && (
                <Card.Img
                  className="stamp"
                  src={visitedStamp}
                  style={{ width: "6rem", height: "6rem" }}
                />
              )}
              <Container>
                <Button
                  variant="success"
                  value={parkId}
                  onClick={(e) => markVisited(e.target.value)}
                >
                  {recordVisit.visited ? `I Visited!` : `Will Visit Soon!`}
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
