import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Button, Card, Col, Row } from "react-bootstrap";
import useAuth from "./../../../hooks/useAuth";
import "./Reviews.css";

const Reviews = () => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="mt-5">
      <div>
        <h2>Coustomer's Review</h2>
        <Row xs={1} md={3} className="g-4">
          {reviews.map((review) => (
            <div>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>{review.name}</Card.Title>
                    <Card.Text>{review.description}</Card.Text>
                    <Card.Text>
                      <Rating
                        initialRating={review.rating}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly
                      ></Rating>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Reviews;
