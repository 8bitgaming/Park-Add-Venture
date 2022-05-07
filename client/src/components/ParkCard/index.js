import { Card, Accordion, Col, Container, Row,} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { DELETE_PARK, SAVE_PARK } from "../../utils/mutation";
import { useMutation } from "@apollo/client";
import { QUERY_USER_PARKS } from "../../utils/queries";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";

const ParkCard = ({ description, name, states, url, images, id }) => {
  const loggedIn = Auth.loggedIn();
  const [parkAdded, setParkAdded] = useState(false);
  const { data } = useQuery(QUERY_USER_PARKS);
  const user = data?.me || [];
  // console.log(`These should be the saved parks ${data.me.savedParks.parkId}`);
  // user.savedParks.map((park) => {
  //   console.log(`These are the saved parks ${park.parkId}`);
  // });

  useEffect(() => {
    user.savedParks.map((park) =>
      park.parkId === id ? setParkAdded(true) : setParkAdded(false)
    );
  }, []);

  // const [parkAdded, setParkAdded] = useState(() => {
  //   // getting stored value
  //   const saved = localStorage.getItem(id);
  //   const initialValue = saved;
  //   return initialValue || false;
  // });

  // useEffect(() => {
  //   const data = localStorage.getItem(id);
  //   setParkAdded(data);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(id, parkAdded);
  // }, [parkAdded]);

  const [savePark] = useMutation(SAVE_PARK, {
    update(cache, { data: { savePark } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_USER_PARKS });
        console.log(`This is me ${me}`);
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

  const [removePark] = useMutation(DELETE_PARK, {
    update(cache, { data: { removePark } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_USER_PARKS });
        let savedParks = me.savedParks;

        console.log(removePark, id);
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

  const deletePark = (event) => {
    removePark({
      variables: { parkId: id },
    });
    setParkAdded(false);
  };

  const addPark = (event) => {
    savePark({
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
              {!parkAdded ? (
                <button className="btn btn-add btn-no-shadow" onClick={addPark}>
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
