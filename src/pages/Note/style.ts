import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #333;
  padding: 15px;
`;

export const Title = styled.TextInput`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const Description = styled.TextInput`
  flex: 1;
  padding: 15px;
  font-size: 15px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
`;

export const SaveButton = styled.TouchableOpacity``;

export const SaveButtonText = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: bold;
`;

export const DeleteButton = styled.TouchableOpacity`
  height: 40px;
  background-color: #ff3333;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const DeleteButtonText = styled.Text`
  font-size: 15px;
  color: #fff;
`;
