import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const ServiceLoad = () => {
  const { user } = useAuth();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleAddToCart = (index) => {
    console.log(services);
    const data = services[index];
    console.log(data);
    data.email = user.email;
    fetch("http://localhost:5000/addOrders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
  };
  return (
    <div className="mt-5">
      <div>
        <Row xs={1} md={3} className="g-4">
          {services.slice(0, 6).map((service, index) => (
            <div>
              <Col>
                <Card>
                  <Card.Img variant="top" src={service.image} />
                  <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                    <h4>Price:$ {service.price}</h4>

                    <Link to="/booking">
                      {" "}
                      <Button onClick={() => handleAddToCart(index)}>
                        Purchase{" "}
                      </Button>{" "}
                    </Link>
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

export default ServiceLoad;
