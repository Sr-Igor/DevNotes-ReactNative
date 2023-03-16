import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #333;
  justify-content: center;
  align-items: center;
`;

export const AddButton = styled.TouchableOpacity`
  border-radius: 30px;
  width: 30px;
  height: 30px;
  border: 2px solid #fff;
  justify-content: center;
  align-items: center;
`;

export const AddButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const List = styled.FlatList`
  flex: 1;
  width: 100%;
`;

export const EmptyList = styled.View``;

export const EmptyListText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
`;
