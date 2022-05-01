import ParkCard from "../components/ParkCard";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [parks, setParks] = useState([]);
  const url =
    "https://developer.nps.gov/api/v1/parks?&limit=466&api_key=osna9h6fzGHW7xBfKZcSmlO2JuN61g4jK1mlHH5u";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setParks(data.data);
      });
  }, []);
  const nationalParks = parks.filter(
    (park) => park.designation === "National Park"
  );
  return (
    <div className="App">
      {nationalParks.map((park) => (
        <ParkCard key={park.id} {...park} />
      ))}
    </div>
  );
};

export default Homepage;
