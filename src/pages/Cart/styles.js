import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: rgba(246,131,68,1);
`;

export const HeaderCart = styled.Text`
  background: rgba(246,131,68,1);
  height: 150px;
  width: 100%;

  text-align: center;
  box-shadow: 0px 2px 4px #00000029;
`

export const WrapProducts = styled.ScrollView.attrs(() => ({
  horizontal: false,
  showsVerticalScrollIndicator: false,
}))`
  background: #fff;
`;

export const ContainerProducts = styled.View`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin: 15px;
`;

export const Product = styled.View`
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  height: 100px;
  width: 80px;
`;
export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProductDelete = styled.TouchableOpacity`
  padding: 6px;
`;

export const ProductControls = styled.View`
  flex-direction: row;
  align-items: center;
  background: #eee;
  padding: 8px;
  border-radius: 4px;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
`;

export const ProductSubtotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
  flex: 1;
  text-align: right;
`;