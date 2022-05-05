import Row from "react-bootstrap/Row";
import MyParksCard from "../components/MyParksCard/myParksCard";

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
  return (
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
