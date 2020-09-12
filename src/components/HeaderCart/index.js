import React from 'react';
// import { AntDesign } from '@expo/vector-icons';

import avatar from '../../assets/person.png';

import { 
  Container, 
  WrapperUser, 
  TitleCart, 
} from './styles';

const HeaderCart = () => {
  return (
    <Container>
      <WrapperUser>
        <TitleCart>
          Shopping Cart
        </TitleCart>
      </WrapperUser>
    </Container>
  );
};

export default HeaderCart;