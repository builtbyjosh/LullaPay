import React from 'react';
import { Row, Col, Container, Button, Image } from 'react-bootstrap';
import bgImage from '../../../images/pexels-abby-chung-1134000.jpg';
import plaground from '../../../images/playground-svgrepo-com.svg';

const HeroSection = ({ handleSectionScroll }) => {
  const sectionStyle = {
    backgroundImage: `url(${bgImage})`,
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <Container fluid className={'bg-success '} style={{background: 'linear-gradient(180deg, rgba(120,194,173,1) 30%, rgba(255,255,255,1) 100%)'}}>
      <Row className="d-flex justify-content-center pt-5 vh-100">
        {/* <Col md="5" className="d-none d-md-block " style={sectionStyle}></Col> */}

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
              >
                More Info
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
