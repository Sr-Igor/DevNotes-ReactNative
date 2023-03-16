import { useState, useEffect, useLayoutEffect } from 'react';
import * as S from './style';
import { useAppSelector, useAppDispatch } from '../../hooks/redux-hook';
import { notesAddNotes, editNote } from '../../redux/reducers/notes/actions';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
// import { List } from '../../types/List';

const Edit = () => {
  const navigation = useNavigation();
  const { list } = useAppSelector((state) => state.notes);
  const route = useRoute();
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isNew, setIsNew] = useState(true);

  useEffect(() => {
    if (route.params?.id) {
      const item = list.find((item) => item.id === route?.params?.id);
      if (item) {
        setTitle(item.title);
        setDescription(item.body);
        setIsNew(false);
      }
    }
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <S.SaveButton
          onPress={() => {
            if (isNew) {
              dispatch(
                notesAddNotes({
                  title,
                  body: description
                })
              );
            } else {
              dispatch(
                editNote({
                  id: route?.params?.id,
                  title,
                  body: description
                })
              );
            }
            navigation.goBack();
          }}
        >
          <S.SaveButtonText>Save</S.SaveButtonText>
        </S.SaveButton>
      ),
      title: isNew ? 'New Note' : 'Edit Note'
    });
  }, [navigation, isNew, title, description]);

  return (
    <S.Container>
      <S.Title
        placeholder="Digite um título"
        placeholderTextColor="#ccc"
        value={title}
        onChangeText={(text) => setTitle(text)}
        autoFocus
      />
      <S.Description
        placeholder="Descrição"
        placeholderTextColor="#ccc"
        multiline={true}
        textAlignVertical="top"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
    </S.Container>
  );
};

export default Edit;
