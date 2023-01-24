import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, FloatingLabel } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ isDaycare }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()
  const onSubmit = handleSubmit(async (data) => {
    let signupData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      isDaycareAdmin: isDaycare,
    };
    try {
      await axios({
        method: 'post',
        url: '/api/users',
        headers: { 'Content-Type': 'application/json' },
        data: signupData,
      }).then((res) => {
        console.log('RES: ', res);
        navigate('/dashboard', {state: {user_info: res.data}})
      });
    } catch (error) {
      console.error(error);
    }
  });
  return (
    <form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <FloatingLabel label="First Name">
          <Form.Control
            type="text"
            placeholder="John"
            name="firstName"
            {...register('firstName', { required: true })}
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3">
        <FloatingLabel label="Last Name">
          <Form.Control
            type="text"
            placeholder="Doe"
            name="lastName"
            {...register('lastName', { required: true })}
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3">
        <FloatingLabel label="Email">
          <Form.Control
            type="email"
            placeholder="johndoe@example.com"
            name="email"
            {...register('email', { required: true })}
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3">
        <FloatingLabel label="Password">
          <Form.Control
            type="password"
            placeholder="totallyNotPassword1"
            name="password"
            {...register('password', { required: true })}
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3">
        <FloatingLabel label="Confirm Password">
          <Form.Control
            type="password"
            placeholder="totallyNotPassword1"
            name="confirmPassword"
            {...register('confirmPassword', {
              required: true,
              validate: (value) => value === getValues('password'),
            })}
          />
        </FloatingLabel>

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
  );
};

export default SignupForm;
