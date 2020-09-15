import React, { useCallback, useState } from 'react';
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

  function setSQuery(e) {
    console.tron.log(e);
  }

  return (
    <Container>
      <WrapperUser>
        <Greetings>
          Hello, Dayana!
        </Greetings>
        <UserAvatar source={avatar} resizeMode="contain" />
      </WrapperUser>

      <InputSeach 
        placeholder="Buscar produtos" 
        // onChange={e => setSQuery(e.target.value)}
      />
    </Container>
  );
};

export default HeaderHome;