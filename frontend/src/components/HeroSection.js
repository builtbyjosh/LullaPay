import React from 'react';
import { Row, Col, Stack, Container, Card } from 'react-bootstrap';
import bgImage from '../images/pexels-abby-chung-1134000.jpg';

const HeroSection = () => {
  const sectionStyle = {
    backgroundImage: `url(${bgImage})`,
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <Container fluid>
      <Row d-flex justify-content-center align-items-center vh-100>
        <Col>
          <Row className="align-items-center">
            <Col
              md="5"
              className="d-none d-md-block "
              style={sectionStyle}
            ></Col>
            <Col md="7">
              <Container className='justify-items-center w-75 text-center' >
                <h1 className=" text-dark text-align-middle">
                  Welcome to LullaPay
                </h1>
                <p>
                  Connecting Parents and Daycare Providers with easy payment
                  solutions
                </p>
              </Container>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
