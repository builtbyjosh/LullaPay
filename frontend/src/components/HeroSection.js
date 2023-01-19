import React from 'react';
import { Row, Col, Stack, Container, Card } from 'react-bootstrap';
import bgImage from '../images/pexels-abby-chung-1134000.jpg';

const HeroSection = () => {

  return (
    
    <Card className="bg-light text-primary text-center py-auto">
      <Card.Img src={bgImage} alt="Background image from Abby Chung" />
      <Card.ImgOverlay className='my-auto'>
        <Card.Title className='display-1'>LullaPay</Card.Title>
        <Card.Text>Connecting Parents and Daycare Providers with easy payment solutions</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default HeroSection;

