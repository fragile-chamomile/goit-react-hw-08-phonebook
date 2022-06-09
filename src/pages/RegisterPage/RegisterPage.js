import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';
import {
  Container,
  Form,
  Label,
  Input,
  Button,
} from '../LoginPage/LoginPage.styled';

function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <h1>Register</h1>

      <Form onSubmit={handleSubmit}>
        <Label>
          <span style={{ marginRight: '25px' }}>Name</span>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            autoComplete="on"
          />
        </Label>

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

        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
}

export default Register;
