import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Stack, Container } from 'react-bootstrap';
import HeroSection from '../components/HeroSection';
// import Message from '../components/Message';
// import Loader from '../components/Loader';

const HomeScreen = () => {
  return (
    <>
      <div className="h-100 ">
        <HeroSection />
      </div>
    </>
  );
};

export default HomeScreen;
