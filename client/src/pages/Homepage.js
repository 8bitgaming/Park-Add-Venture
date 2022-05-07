import ParkCard from "../components/ParkCard";
import { useEffect, useState } from "react";
import "./homepage.css";
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

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
  const [query, setQuery] = useState("");

  return (
    <div className="homepage">
      <div className="text-center pb-5">
        <h1 className="pt-5">U.S. National Parks</h1>
        <p className="mobile">
          Explore the many exciting National Parks of the United
          States. Select the name for more information, or use the <FontAwesomeIcon icon={faCirclePlus} /> button
          to add to a list of parks you would like to add to a personal list to
          visit in the future.
        </p>
        <p className="desktop">
          Explore the many exciting National Parks of the United States.
          <br /> Select the name for more information, or use the <FontAwesomeIcon icon={faCirclePlus} /> button
          to add to a list of parks you would like to add to a personal list to
          visit in the future.
        </p>
        <br></br>
        <input
          type="text"
          placeholder="Search..."
          className="g-4 card-container"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      </div>

      <Row xs={1} md={3} lg={4} xxl={5} className="g-4 card-container">
        {nationalParks
          .filter((park) => park.name.toLowerCase().includes(query))
          .map((park) => (
            <ParkCard key={park.id} {...park} />
          ))}
      </Row>
    </div>
  );
};

export default Homepage;
