import { Card, Accordion, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { SAVE_PARK } from "../../utils/mutation";
import { useMutation } from "@apollo/client";
import { QUERY_USER_PARKS } from "../../utils/queries";

const ParkCard = ({ description, name, states, url, images, id }) => {
  const [savePark] = useMutation(SAVE_PARK, {
    update(cache, { data: { savePark } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_USER_PARKS });
        let savedParks = me.savedParks;
        savedParks = [savePark, ...savedParks];
        me.savedParks = savedParks;
        cache.writeQuery({
          query: QUERY_USER_PARKS,
          data: { me },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const [parkIcon, setIcon] = useState(faCirclePlus);
  const addPark = (event) => {
    const savedParks = savePark({
      variables: {
        parkId: id,
        parkName: name,
        image: images[0].url,
        link: url,
      },
    });

    console.log(`${id} was added`);
    setIcon(faCircleCheck);
    event.target.style.color = "#698E1C";
  };

  return (
    <Col className="container-fluid d-flex justify-content-center">
      <Card style={{ width: "18rem" }}>
        <div className="image-container">
          <Card.Img
            variant="top"
            src={images[0].url}
            style={{ width: "17.9rem", height: "14rem" }}
          />
          <button className="btn btn-no-shadow" onClick={addPark}>
            <FontAwesomeIcon icon={parkIcon} size="2x" />
          </button>
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
