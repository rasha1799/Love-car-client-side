import React from 'react';
import { Button, Card, Col } from 'react-bootstrap'
const Town = (props) => {
    const {name,image,description,duration,price}=props?.town||{}
    return (
        <div>
            <Col>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            
            <p>{duration}</p>
            <h4>Price:$ {price}</h4>
            <Button>Book Now</Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Town;