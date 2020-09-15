import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { formatPrice } from '../../util/format';
import { Feather } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';

import HeaderCart from '../../components/HeaderCart';

import emptyCart from '../../../emptyCart.json';

import * as CartActions from '../../store/modules/cart/actions';

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
  ProductSubtotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
  EmptyContainer,
  EmptyText
} from './styles';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const { removeFromCart, updateAmountRequest } = CartActions;

  const dispatch = useDispatch();

  const cartModified = cart.map(prod => ({
    ...prod,
    subtotal:
      formatPrice(prod.amount * (prod.actual_price)
        .substring(2, 9)
        .replace(',', '.')),
  }));

  const total = cart.reduce((total, product) => {
    return total + (product.actual_price)
      .substring(2, 9)
      .replace(',', '.')
      * product.amount;
  }, 0);

  console.tron.log('teste', total);

  const increment = useCallback((product) => {
    dispatch(updateAmountRequest(product.id, product.amount + 1));
  }, []);

  const decrement = useCallback((product) => {
    dispatch(updateAmountRequest(product.id, product.amount - 1));
  }, []);

  return (

    <Container>
      <HeaderCart />

      {cart.length ? (
        <>
          <ContainerProducts>
            {cartModified.map((product) => (
              <Product key={product.id}>
                <ProductInfo>
                  <ProductImage source={{ uri: product.image }} />
                  <ProductDetails>
                    <ProductTitle>{product.name}</ProductTitle>
                    <ProductPrice>{product.actual_price}</ProductPrice>
                  </ProductDetails>
                  <ProductDelete onPress={() => dispatch(removeFromCart(product.id))}>
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

            <TotalContainer>
              <TotalText>TOTAL</TotalText>
              <TotalAmount>{formatPrice(total)}</TotalAmount>
              <Order>
                <OrderText>FINALIZAR PEDIDO</OrderText>
              </Order>
            </TotalContainer>
          </ContainerProducts>
        </>
      ) : (
          <EmptyContainer>
            <LottieView source={emptyCart} resizeMode="contain" autoPlay loop />
            <EmptyText>Seu carrinho está vazio.</EmptyText>
          </EmptyContainer>
        )}
    </Container>
  );
};

export default Cart;