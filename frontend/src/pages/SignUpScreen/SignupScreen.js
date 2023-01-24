import { useState } from 'react';
import DaycareSignup from './DaycareSignup';
import ParentSignup from './ParentSignup';
import { Form, Container } from 'react-bootstrap';

const SignupScreen = () => {
  const [isDaycare, setIsDaycare] = useState(false);
  const switchText = isDaycare
    ? 'Signin as a Parent'
    : 'Signin as a Daycare Provider';
  return (
    <div>
      <Form>
        <Form.Check
          type="switch"
          label={switchText}
          onClick={()=>setIsDaycare(!isDaycare)}
        />
      </Form>
      <Container>{isDaycare ? <DaycareSignup /> : <ParentSignup />}</Container>
    </div>
  );
};

export default SignupScreen;
