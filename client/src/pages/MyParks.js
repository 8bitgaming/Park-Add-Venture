import React from "react";
import Row from "react-bootstrap/Row";
import MyParksCard from "../components/MyParksCard/myParksCard";


import Auth from '../utils/auth';
import { useQuery } from "@apollo/client";
import { QUERY_USER_PARKS } from '../utils/queries';

const MyParks = () => {
  const { loading, data } = useQuery(QUERY_USER_PARKS);
  const user = data?.user || [];
  const loggedIn = Auth.loggedIn();

  if (loading) {
      return <div>Page is loading.</div>
  } 

  return (
      <Row xs={1} md={3} lg={4} xxl={5} className="g-4 card-container my-parks-page">
      {user.map((park) => (
        <MyParksCard key={park.savedParks.parkId} {...user} />
      ))}
    </Row>
  );
};

export default MyParks;
