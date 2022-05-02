import ParkCard from "../components/ParkCard";
import { useEffect, useState } from "react";
import "./homepage.css";
import { Row } from "react-bootstrap";

const Homepage = () => {
  const [parks, setParks] = useState([]);
  const url = `https://developer.nps.gov/api/v1/parks?&limit=466&api_key=${process.env.REACT_APP_API_KEY}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setParks(data.data);
      });
  }, [url]);
  const nationalParks = parks.filter(
    (park) => park.designation === "National Park"
  );
  return (
    <div className="homepage">
      <div className="text-center pb-5">
        <h1 className="pt-5">U.S. National Parks</h1>
        <p className="mobile">
          Explore the many exciting National Parks and Monuments of the United
          States. Select the name for more information, or use the Visit! button
          to add to a list of parks you would like to add to a personal list to
          visit in the future.
        </p>
        <p className="desktop">
          Explore the many exciting National Parks and Monuments of the United
          States.
          <br /> Select the name for more information, or use the Visit! button
          to add to a list of parks you would like to add to a personal list to
          visit in the future.
        </p>
      </div>

      <Row xs={1} md={3} lg={4} xxl={5} className="g-4 card-container">
        {nationalParks.map((park) => (
          <ParkCard key={park.id} {...park} />
        ))}
      </Row>
    </div>
  );
};

export default Homepage;
