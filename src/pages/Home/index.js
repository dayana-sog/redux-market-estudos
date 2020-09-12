import React, {useState, useEffect, useCallback} from 'react';
import { useDispatch } from 'react-redux';

import * as CartActions from '../../store/modules/cart/actions';

import HeaderHome from '../../components/HeaderHome';

import dress from '../../assets/dress.png';
import pants from '../../assets/pants.png';
import Tshirt from '../../assets/tshirt.png';
import skirt from '../../assets/skirt.png';

import api from '../../services/api';

import {
  Container,
  Title,
  WrapCathegory,
  Banners,
  Img,
  TitleBanner,
  Products,
  ImgProduct,
  ProductsInformations,
  Product,
  ProductColor,
  ProductSize,
  FinalPrice,
} from './styles';

const Home = () => {
  const [products, setProducts] = useState([]);
  // const [sizes, setSizes] = useState();

  const dispatch = useDispatch();

  const items = [
    {
      key: String(Math.random()),
      img: dress,
      title: 'Dresses',
    },
    {
      key: String(Math.random()),
      img: pants,
      title: 'Pants',
    }, {
      key: String(Math.random()),
      img: skirt,
      title: 'Skirts',
    }, {
      key: String(Math.random()),
      img: Tshirt,
      title: 'Shirts',
    },
  ]

  useEffect(() => {
    (async function loadProducts() {
      try {
        const response = await api.get('products');

        setProducts(response.data);
      } catch (error) {
        console.log('deu ruim', error);
      }
    })()
  }, []);

  const handleAddProductToCart = useCallback((product) => {
    const { addToCartRequest } = CartActions;

    dispatch(addToCartRequest(product));
  }, []);

  return (
    <>
      <HeaderHome />

      <Container>
        <Title>Categoria</Title>

        <WrapCathegory>
          {items.map(item => (
            <Banners key={item.key} >
              <Img source={item.img} />

              <TitleBanner>{item.title}</TitleBanner>
            </Banners>
          ))}
        </WrapCathegory>

        {products.map(product => (
          <Products 
            key={product.name}
            onPress={() => handleAddProductToCart(product)}
          >
              <ImgProduct source={{ uri: product.image }} />

              <ProductsInformations>
                <Product>{product.name}</Product>
                <ProductColor>{product.color}</ProductColor>
                <ProductSize>M</ProductSize>
                <FinalPrice>{product.actual_price}</FinalPrice>
              </ProductsInformations>
          </Products>        
        ))}
      </Container>
    </>
  );
};

export default Home;