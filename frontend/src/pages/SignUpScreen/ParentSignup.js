import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import axios from 'axios';

const ParentSignup = () => {

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();


  const onSubmit = handleSubmit(async (data) => {

    let signupData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    };

    try {
      console.log(signupData);
      const { data } = await axios({
        method: 'post',
        url: '/api/users',
        data: signupData,
        headers: {'Content-Type': 'application/json'}
      });
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <>
      <Container fluid>
        <Row className="d-flex justify-content-center align-items-center vh-100">
          <Col>
            <h2 className="fw-bold mb-4 text-center">Sign Up</h2>
            <form onSubmit={onSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="John"
                  name="firstName"
                  {...register('firstName', { required: true })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Doe"
                  name="lastName"
                  {...register('lastName', { required: true })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="johndoe@example.com"
                  name="email"
                  {...register('email', { required: true })}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="totallyNotPassword1"
                  name="password"
                  {...register('password', { required: true })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="totallyNotPassword1"
                  name="confirmPassword"
                  {...register('confirmPassword', {
                    required: true,
                    validate: (value) => value === getValues('password'),
                  })}
                />
                {errors.confirmPassword &&
                  errors.confirmPassword.type === 'validate' && (
                    <div style={{ color: 'red', fontSize: '12px' }}>
                      Passwords do not match
                    </div>
                  )}
              </Form.Group>

              <Button onClick={(e) => handleSubmit(e)} type="submit">
                Submit
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ParentSignup;
