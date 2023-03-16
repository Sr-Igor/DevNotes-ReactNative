import * as S from './style';

import { useLayoutEffect } from 'react';
import { NoteItem } from '../../components/NodeItem';

import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '../../hooks/redux-hook';

import { ListItem } from '../../types/List';

const List = () => {
  const navigation = useNavigation();
  const { list } = useAppSelector((state) => state.notes);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <S.AddButton onPress={() => navigation.navigate('Note' as never)}>
          <S.AddButtonText>+</S.AddButtonText>
        </S.AddButton>
      ),
      title: 'Notes'
    });
  }, [navigation]);

  const handleNote = (id: number) => {
    navigation.navigate('Note' as never, { id } as never);
  };

  return (
    <S.Container>
      {!!list?.length && (
        <S.List
          data={list}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <NoteItem
              data={item as ListItem}
              onPress={(id: number) => handleNote(id)}
            />
          )}
        />
      )}
      {!list?.length && (
        <S.EmptyList>
          <S.EmptyListText>Empty List</S.EmptyListText>
        </S.EmptyList>
      )}
    </S.Container>
  );
};

export default List;
