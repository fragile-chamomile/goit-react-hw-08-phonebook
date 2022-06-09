import { useDispatch, useSelector } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';
import { Container, Avatar, Name, Button } from './UserMenu.styled';
import defaultAvatar from './defaultAvatar.png';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(store => store.auth.user.name);
  const avatar = defaultAvatar;

  return (
    <Container>
      <Avatar src={avatar} alt="" width="32" />
      <Name>Welcome, {name}</Name>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </Button>
    </Container>
  );
}

export default UserMenu;
