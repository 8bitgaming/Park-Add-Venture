import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const ReviewList = ({ reviews, title }) => {
  if (!reviews.length) {
    return <h3>No Reviews Yet</h3>;
  }

  return (
    <Card>
      <Card.Title>{title}</Card.Title>
      {reviews &&
        reviews.map(review => (
          <Card.Body key={review._id} className="mb-3">
            <Card.Header className="card-header">
              <Link
                to={`/myparks/${review.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {review.username}
              </Link>{' '}
              reviewed on {review.createdAt}
            </Card.Header>
            <div className="card-body">
              <Link to={`/review/${review._id}`}>
                <p>{review.reviewText}</p>
              </Link>
            </div>
          </Card.Body>
        ))}
    </Card>
  );
};

export default ThoughtList;