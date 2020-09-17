import React, { useState } from 'react';
// import { AntDesign } from '@expo/vector-icons';

import avatar from '../../assets/person.png';

import { 
  Container, 
  WrapperUser, 
  Greetings, 
  UserAvatar, 
  InputSeach
} from './styles';

function HeaderHome ({ products }) {
  const [query, setSQuery] = useState('');

  const FilteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(query.toLowerCase());
  });

  if (FilteredProducts !== '') {

    console.tron.log(FilteredProducts);
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
        onChangeText={(e) => setSQuery(e)}
      />
    </Container>
  );
};

export default HeaderHome;