import { useParams } from 'react-router-dom';
import auth from 'yaml/src/utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_REVIEW } from '../utils/queries';
import { Card } from 'react-bootstrap';

const SingleReview = (props) => {
    const { id: reviewId } = useParams();

    const { loading, data } = useQuery(QUERY_REVIEW, {
        variables: { id: reviewId },
    });

    const review = data?.review || {};
    
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Card>
                <p>
                    <span>
                        {review.username}
                    </span>{' '}
                    reviewed on {review.createdAt}
                </p>
                <Card.Body>
                    <p>
                        {review.reviewText}
                    </p>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleReview;