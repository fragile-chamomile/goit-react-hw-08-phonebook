import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';
import { Container, Form, Label, Input, Button } from './LoginPage.styled';

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Label>
          <span style={{ marginRight: '28px' }}>Email</span>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
            autoComplete="on"
          />
        </Label>

        <Label>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
            autoComplete="on"
          />
        </Label>

        <Button type="submit">Sign in</Button>
      </Form>
    </Container>
  );
}

export default Login;
