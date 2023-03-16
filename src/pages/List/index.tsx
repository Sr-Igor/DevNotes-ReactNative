//Styles
import * as S from './style';

//React
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

//Redux
import { useAppSelector } from '../../hooks/redux-hook';

//Components
import { NoteItem } from '../../components/NodeItem';

//Types
import { ListItem } from '../../types/List';
import { NoteScreenNavigationProp } from '../../types/Navigation';

const List = () => {
  const { list } = useAppSelector((state) => state.notes);
  const navigation = useNavigation<NoteScreenNavigationProp>();

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
    navigation.navigate('Note', { id });
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
