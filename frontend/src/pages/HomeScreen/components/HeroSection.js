import React from 'react';
import { Row, Col, Container, Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import bgImage from '../../../images/pexels-abby-chung-1134000.jpg';
import plaground from '../../../images/playground-svgrepo-com.svg';

const HeroSection = ({ handleSectionScroll }) => {

  const navigate = useNavigate()
  return (
    <Container fluid className={'bg-success '} style={{background: 'linear-gradient(180deg, rgba(120,194,173,1) 30%, rgba(255,255,255,1) 100%)'}}>
      <Row className="d-flex justify-content-center pt-5 vh-100">
        <Col md="6" className="ps-5">
          <Row className="align-content-center h-100">
            <Col className="ps-5">
              <h1 className="text-dark px-0 display-3">Welcome to LullaPay</h1>
              <p className="text-dark">
                Connecting Parents and Daycare Providers with easy payment
                solutions
              </p>
              <Button
                variant="warning"
                onClick={() => handleSectionScroll('infoSection')}
                className='mx-1'
              >
                More Info
              </Button>
              <Button
                variant="warning"
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
            </Col>
          </Row>
        </Col>

        <Col md="6" className="d-none d-md-block ">
          <Row className="align-content-center h-100">
            <Col className={'text-center'}>
              <Image src={plaground} width="450px" className="img-fluid" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
