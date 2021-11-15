import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";

const ServiceDetail = () => {
  const { name } = useParams();
  const [details, setDetails] = useState([]);
  const [displayDetail, setDisplayDetail] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  useEffect(() => {
    const foundDetails = details.find((detail) => detail.name === name);
    setDisplayDetail(foundDetails);
  }, [details]);
  return (
    <div>
      <h1>{name}</h1>

      <Container>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={displayDetail?.image} />
            </Card>
          </Col>
          <Col md={5}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{displayDetail?.name}</Card.Title>
                <Card.Text>
                  <b> Description : {displayDetail?.description}</b>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceDetail;
