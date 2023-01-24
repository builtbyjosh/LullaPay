import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SignupForm from './components/SignupForm';

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
            <Form.Group className="mb-3">
              <Form.Label className=''>Are you a Daycare Provider?</Form.Label>
              <Form.Switch
                type="switch"
                label={isDaycare ? 'Yes' : 'No'}
                onClick={() => setIsDaycare(!isDaycare)}
              />
              <Form.Label>
                You will be able to register your{' '}
                {isDaycare ? 'Daycare' : 'Child'} on the next screen
              </Form.Label>
            </Form.Group>
            <SignupForm isDaycare={isDaycare} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignupScreen;
