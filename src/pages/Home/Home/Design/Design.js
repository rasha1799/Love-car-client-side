import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const Design = () => {
  return (
    <div className="my-5  lg-3 sm-6 xsm-12">
      <h2>WHY CHOOSE US</h2>

      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>
              <i class="fas fa-tag"></i>FINANCING MADE EASY
            </Card.Title>
            <Card.Text>
              Our stress-free finance department that can find financial
              solutions to save you money.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              <i class="fa-solid fa-archway"></i>WIDE RANGE OF BRANDS
            </Card.Title>
            <Card.Text>
              With a robust selection of popular vehicles on hand, as well as
              leading vehicles from BMW and Ford.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              <i class="fa-solid fa-message-minus"></i>TRUSTED BY THOUSANDS
            </Card.Title>
            <Card.Text>
              10 new offers every day. 350 offers on site, trusted by a
              community of thousands of users.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              <i class="fa-solid fa-bookmark"></i>CAR SERVICE & MAINTENANCE
            </Card.Title>
            <Card.Text>
              CAR SERVICE & MAINTENANCE Our service department maintain your car
              to stay safe on the road for many more years.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Design;
