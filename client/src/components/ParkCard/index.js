import { Card, Accordion, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
const ParkCard = ({ description, name, states, url, images }) => {
  return (
    <Col className="container-fluid d-flex justify-content-center">
      <Card style={{ width: "18rem" }}>
        <div className="image-container">
          <Card.Img
            variant="top"
            src={images[0].url}
            style={{ width: "17.9rem", height: "14rem" }}
          />
          <div className="btn">
            <FontAwesomeIcon icon={faCirclePlus} size="2x" />
          </div>
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
  );
};

export default ParkCard;
