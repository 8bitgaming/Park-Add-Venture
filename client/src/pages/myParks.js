import React from "react";
import MyParksCard from "../components/MyParksCard/myParksCard";

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
// import { QUERY_USER_PARKS } from '../utils/queries';

const MyParks = () => {
//   const { loading, data } = useQuery(QUERY_USER_PARKS);
//   const user = data?.user || [];
  const loggedIn = Auth.loggedIn();

  return (
    <MyParksCard />
  );
};

export default MyParks;
