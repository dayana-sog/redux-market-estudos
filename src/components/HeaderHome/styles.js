import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 0;
  background: rgba(246,131,68,1);
`;

export const WrapperUser = styled.View`
  background: rgba(246,131,68,1);
  width: 100%;
  height: 250px;
  margin-top: -45px;
  border-radius: 35px;
  box-shadow: 0px 2px 4px #00000029;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Greetings = styled.Text`
  margin-top: 20px;
  margin-left: 30px; 
  font-size: 25px;
  font-weight: bold;
  color: #fff;
`;

export const UserAvatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 30px;
  margin-top: 20px;
`;

export const InputSeach = styled.TextInput`
  padding: 20px;
  border-radius: 20px;
  margin: -60px 10px 20px 10px;
  background: rgba(249, 155, 104, 100);

  box-shadow: 0 0 10px #00000029;
`;