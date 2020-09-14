import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { Feather } from '@expo/vector-icons';

import HeaderCart from '../../components/HeaderCart';

import {
  Container,
  ContainerProducts,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal
} from './styles';

const Cart = () => {
  const cart = useSelector(state => state.cart);

  console.tron.log('Dentro de cart', cart);

  const increment = useCallback((product) => {
    updateAmountRequest(product.id, product.amount + 1);
  }, []);

  const decrement = useCallback((product) => {
    updateAmountRequest(product.id, product.amount - 1);
  }, []);

  return (
    <Container>
      <HeaderCart />

        <ContainerProducts>
          {cart.map((product) => (
            <Product key={product.id}>
              <ProductInfo>
                <ProductImage source={{ uri: product.image }} />
                <ProductDetails>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductPrice>{product.actual_price}</ProductPrice>
                </ProductDetails>
                <ProductDelete onPress={() => removeFromCart(product.id)}>
                  <Feather name="trash-2" size={20} color="#454777" />
                </ProductDelete>
              </ProductInfo>
              <ProductControls>
                <ProductControlButton onPress={() => decrement(product)}>
                  <Feather name="minus-circle" size={20} color="#454777" />
                </ProductControlButton>
                <ProductAmount value={String(product.amount)} />
                <ProductControlButton onPress={() => increment(product)}>
                  <Feather name="plus-circle" size={20} color="#454777" />
                </ProductControlButton>
                <ProductSubtotal>{product.subtotal}</ProductSubtotal>
              </ProductControls>
            </Product>
          ))}
        </ContainerProducts>
    </Container>
  );
};

export default Cart;