import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupScreen = () => {
  const [isDaycare, setIsDaycare] = useState(false);

  const navigate = useNavigate();

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
      isDaycareProivder: data.isDaycareProivder,
    };

    try {
      console.log('signupData: ', signupData);
      await axios({
        method: 'post',
        url: '/api/users',
        headers: { 'Content-Type': 'application/json' },
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
        },
      }).then((res) => {
        console.log('RES: ', res);
      });
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
              <Form.Group className="mb-3">
                <Form.Label>Are you a Daycare Provider?</Form.Label>
                <Form.Switch
                  type="switch"
                  label={isDaycare ? 'Yes' : 'No'}
                  onClick={() => setIsDaycare(!isDaycare)}
                  {...register('isDaycareProvider')}
                />
                <Form.Label>
                  You will be able to register your {isDaycare ? 'Daycare': 'Child'} on the next screen
                </Form.Label>
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

export default SignupScreen;
