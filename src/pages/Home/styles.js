import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: false,
  showsVerticalScrollIndicator: false,
}))`
  margin: 225px 20px 0 30px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const WrapCathegory = styled.View`
  margin-top: 20px;
  flex-direction: row;
`;

export const Banners = styled.TouchableOpacity`
  background: #fff;
  margin: 15px 0;
  border-radius: 8px;
  height: 90px;
  width: 70px;
  margin-right: 10px;
  box-shadow: 0px 2px 4px #00000029;

`;

export const Img = styled.Image`
  width: 35px;
  height: 35px;
  align-self: center;
  margin: 13px 10px; 
`;

export const TitleBanner = styled.Text`
  text-align: center;
`;

export const Products = styled.TouchableOpacity`
  background: #fff;
  margin: 20px 10px 0 0;
  border-radius: 8px;
  height: 150px;
  box-shadow: 0px 2px 4px #00000029;

  flex-direction: row;
  align-items: center;
`;

export const ImgProduct = styled.Image`
  width: 50%;
  height: 150px;
  border-radius: 8px;
`;

export const ProductsInformations = styled.View`
  margin-left: 20px;
`;

export const Product = styled.Text`
  font-size: 13px;
  font-weight: bold;
`;

export const ProductColor = styled.Text`
  color: #333;
  margin-top: 5px;
  font-size: 12px;
`;

export const ProductSize = styled.Text`
  font-weight: bold;
  margin-top: 10px;
`;

export const FinalPrice = styled.Text`
  margin-top: 30px;
  font-weight: bold;
  font-size: 18px;
`;
