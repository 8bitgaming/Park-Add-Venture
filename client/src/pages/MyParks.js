import Row from "react-bootstrap/Row";
import MyParksCard from "../components/MyParksCard/myParksCard";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_USER_PARKS } from "../utils/queries";
import "../components/MyParksCard/myParksCard.css";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

const MyParks = () => {
  const loggedIn = Auth.loggedIn();
  const { loading, data, refetch } = useQuery(QUERY_USER_PARKS);
  const user = data?.me || [];
  const [triggerLoading, setTriggerLoading] = useState(user);

  useEffect(() => {
    refetch();
  }, [triggerLoading]);

  if (loading) {
    return <div>Page is loading.</div>;
  }

  return !user.savedParks.length ? (
    <Container>No parks added. Use the parks page to add some parks to visit!</Container>
  ) : (
    loggedIn && (
      <Row
        xs={1}
        md={3}
        lg={4}
        xxl={5}
        className="g-4 card-container my-parks-page"
      >
        {user.savedParks.map((park) => (
          <MyParksCard
            key={park.parkId}
            {...park}
            setTriggerLoading={setTriggerLoading}
            triggerLoading={triggerLoading}
          />
        ))}
      </Row>
    )
  );
};

export default MyParks;
