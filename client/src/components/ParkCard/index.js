import { Card, Accordion, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { DELETE_PARK, SAVE_PARK } from "../../utils/mutation";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";

const ParkCard = ({
  description,
  name,
  states,
  url,
  images,
  id,
  showCheck,
}) => {
  const loggedIn = Auth.loggedIn();

  const [parkAdded, setParkAdded] = useState(showCheck);

  const [savePark] = useMutation(SAVE_PARK);

  const [removePark] = useMutation(DELETE_PARK);

  const deletePark = async (event) => {
    await removePark({
      variables: { parkId: id },
    });
    setParkAdded(false);
  };

  const addPark = async (event) => {
    await savePark({
      variables: {
        parkId: id,
        parkName: name,
        image: images[0].url,
        link: url,
      },
    });

    setParkAdded(true);
    console.log(`${id} was added`);
  };

  return (
    <Container>
      <Row>
        <Col className="container-fluid d-flex justify-content-center">
          <Card style={{ width: "18rem" }}>
            <div className="image-container">
              <Card.Img
                variant="top"
                src={images[0].url}
                style={{ width: "17.9rem", height: "14rem" }}
              />
              {loggedIn && (
                <>
                  {parkAdded === false ? (
                    <button
                      className="btn btn-add btn-no-shadow"
                      onClick={addPark}
                    >
                      <FontAwesomeIcon icon={faCirclePlus} size="2x" />
                    </button>
                  ) : (
                    <button
                      className="btn btn-remove btn-no-shadow"
                      onClick={deletePark}
                    >
                      <FontAwesomeIcon icon={faCircleCheck} size="2x" />
                    </button>
                  )}
                </>
              )}
            </div>
            <Card.Body className="yellow-background">
              <Accordion flush>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="yellow-background">
                    {" "}
                    {name}, {states}
                  </Accordion.Header>
                  <Accordion.Body className="text-left">
                    {description}
                    <Card.Body className="text-center">
                      <Card.Link
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn More
                      </Card.Link>
                    </Card.Body>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ParkCard;
