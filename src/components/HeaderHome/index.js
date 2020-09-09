import React from 'react';
// import { AntDesign } from '@expo/vector-icons';

import avatar from '../../assets/person.png';

import { 
  Container, 
  WrapperUser, 
  Greetings, 
  UserAvatar, 
  InputSeach
} from './styles';

const HeaderHome = () => {
  return (
    <Container>
      <WrapperUser>
        <Greetings>
          Hello, Dayana!
        </Greetings>
        <UserAvatar source={avatar} resizeMode="contain" />
      </WrapperUser>

      <InputSeach placeholder="Buscar produtos" />
    </Container>
  );
};

export default HeaderHome;