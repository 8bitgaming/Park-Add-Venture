import { Card } from "react-bootstrap";

const ParkCard = ({ description, name, states, url, images }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={images[0].url}
          style={{ width: "18rem" }}
        />
        <Card.Body>
          <Card.Title>
            {name}, {states}{" "}
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Link href={url} target="_blank" rel="noopener noreferrer">
            Learn More
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ParkCard;
