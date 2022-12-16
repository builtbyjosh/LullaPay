import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Stack, } from 'react-bootstrap';
// import Message from '../components/Message';
// import Loader from '../components/Loader';

const HomeScreen = () => {
  return (
    <Stack gap={3}>
      <h1 className="mx-auto">Welcome to LullaPay</h1>
      {/* {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <h3>Login or Signup</h3>
        </Row>
      )} */}
      <h3 className="mx-auto">Login or Signup</h3>
    </Stack>
  );
};

export default HomeScreen;
