import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import bgImage from '../../../images/pexels-abby-chung-1134000.jpg';

const HeroSection = ({ handleSectionScroll }) => {
  const sectionStyle = {
    backgroundImage: `url(${bgImage})`,
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <Container fluid>
      <Row className="d-flex justify-content-center align-items-center vh-100">
        <Col md="5" className="d-none d-md-block " style={sectionStyle}></Col>
        <Col md="7">
          <Container className="justify-items-center w-75 text-center">
            <h1 className=" text-dark text-align-middle">
              Welcome to LullaPay
            </h1>
            <p>
              Connecting Parents and Daycare Providers with easy payment
              solutions
            </p>
            <Button onClick={() => handleSectionScroll('infoSection')}>More Info</Button>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
