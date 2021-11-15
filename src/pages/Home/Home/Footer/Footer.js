import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faFacebook,faFacebookMessenger,faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
import { Button, Col, Form, FormControl, InputGroup } from 'react-bootstrap';


const Footer = () => {
    return (
        <div className="bg-dark ">
            <div class='text'>
                <h2 style={{color:'blue'}}>Learn Here</h2>
                <h3>Do you need help with anything?</h3>
                <Form>
                  <Col s="auto">
                <InputGroup className="mb-3">
    <FormControl
      placeholder="Your Email"
      aria-label="Your Email"
      aria-describedby="basic-addon2"
    />
    <Button  id="button-addon2">
      Subscribe
    </Button>
  </InputGroup>
  </Col>
                </Form>
            </div>

            <div>
            <FontAwesomeIcon className="fa" icon={faFacebook } />
            <FontAwesomeIcon className="fa ms-5" icon={faInstagram } />
            <FontAwesomeIcon className=" fa ms-5" icon={faFacebookMessenger } />
            <FontAwesomeIcon className="fa ms-5" icon={faTwitter} />
            </div>
        </div>
    );
};

export default Footer;