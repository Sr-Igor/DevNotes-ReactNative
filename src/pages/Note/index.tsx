// Styles
import * as S from './style';

//React
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect, useLayoutEffect } from 'react';

//Redux
import {
  notesAddNotes,
  editNote,
  deleteNote
} from '../../redux/reducers/notes/actions';
import { useAppSelector, useAppDispatch } from '../../hooks/redux-hook';

//Types
import { NoteScreenRouteProp } from '../../types/Navigation';

const Edit = () => {
  //Redux
  const dispatch = useAppDispatch();
  const { list } = useAppSelector((state) => state.notes);

  //Hooks
  const navigation = useNavigation();
  const route = useRoute<NoteScreenRouteProp>();

  //States
  const [title, setTitle] = useState('');
  const [isNew, setIsNew] = useState(true);
  const [description, setDescription] = useState('');

  //Find Item
  useEffect(() => {
    if (route.params?.id) {
      const item = list.find((item) => item.id === route.params?.id);
      if (item) {
        setTitle(item.title);
        setDescription(item.body);
        setIsNew(false);
      }
    }
  }, [list, route.params?.id]);

  //Set header actions
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
                  id: route.params?.id,
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
  }, [navigation, isNew, title, description, dispatch, route.params?.id]);

  const handleDelete = () => {
    dispatch(deleteNote(route.params?.id as number));
    navigation.goBack();
  };

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
      <S.DeleteButton onPress={handleDelete}>
        <S.DeleteButtonText>Delete</S.DeleteButtonText>
      </S.DeleteButton>
    </S.Container>
  );
};

export default Edit;
