import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import visitedStamp from "../../images/visitedStampRotated.png";
import "./myParksCard.css";
import { useMutation } from "@apollo/client";
import { UDPATE_PARK, DELETE_PARK } from "../../utils/mutation";
import { QUERY_USER_PARKS } from "../../utils/queries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

//on page load, takes params sent from QUERY from myParks component and sets the recordVisit state for the parkID and visit
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
  //triggerUseEffect is a toggle that is used after the markedVisited function/db change is made to automatically refresh the DOM
  const [triggerUseEffect, setTriggerUseEffect] = useState();
  const [updatePark] = useMutation(UDPATE_PARK);

  /* markVisited is triggered by the onClick, 
  visitToggle switches the visit state - so if the park was visited already it would change to not visited and vice versa,
  the state is then updated with setRecordVisit,
  updatePark is called to update the db, passing in the new visited value,
  finally the triggerUseEffect is set, which then causes the useEffect to be triggered and the DOM updated*/
  const markVisited = async (e) => {
    let visitToggle = !recordVisit.visited;
    setRecordVisit({ ...recordVisit, visited: visitToggle });
    try {
      await updatePark({
        variables: { ...recordVisit, visited: visitToggle },
      });
    } catch (e) {
      console.error(e);
    } finally {
      setTriggerUseEffect(!triggerUseEffect);
    }
  };

  useEffect(() => {}, [triggerUseEffect]);

  const [removePark] = useMutation(DELETE_PARK, {
    update(cache, { data: { removePark } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_USER_PARKS });
        let savedParks = me.savedParks;

        savedParks = [removePark, ...savedParks];
        me.savedParks = savedParks;
        console.log(me.savedParks);
        cache.writeQuery({
          query: QUERY_USER_PARKS,
          data: { me },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const deletePark = async (event) => {
    await removePark({
      variables: { parkId },
    });
  };

  //recordVisit.visited is checked and if true displays the visited stamp. A ternary is used to change the button text also based on visit status.
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
              <Container className="container-fluid d-flex justify-content-center mt-10">
                <Button
                  className="visit-button"
                  variant="success"
                  value={parkId}
                  onClick={(e) => markVisited(e.target.value)}
                >
                  {recordVisit.visited
                    ? `Change to not visited`
                    : `Change to visited`}
                </Button>{" "}
                <button
                  className="btn btn-remove btn-no-shadow"
                  onClick={deletePark}
                >
                  <FontAwesomeIcon icon={faTrash} size="2x" />
                </button>
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MyParksCard;
