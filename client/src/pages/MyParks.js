import Row from "react-bootstrap/Row";
import MyParksCard from "../components/MyParksCard/myParksCard";
import Container from "react-bootstrap/Container";

import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_USER_PARKS } from "../utils/queries";
import "../components/MyParksCard/myParksCard.css"

const MyParks = () => {
  const loggedIn = Auth.loggedIn();
  const { loading, data } = useQuery(QUERY_USER_PARKS);
  const user = data?.me || [];

  if (loading) {
    return <div>Page is loading.</div>;
  }
  console.log("user", user);
  return !user.length ? (
    <Container className="container-fluid d-flex justify-content-center mt-10">
      No parks found. Use the parks page to find your favorites and add them to
      your list!
    </Container>
  ) : (
    loggedIn && (
      <div className="my-parks-page">
      <Row
        xs={1}
        md={3}
        lg={4}
        xxl={5}
        className="g-4 card-container"
      >
        {user.savedParks.map((park) => (
          <MyParksCard key={park.parkId} {...park} />
        ))}
      </Row>
      </div>
    )
  );
};

export default MyParks;
