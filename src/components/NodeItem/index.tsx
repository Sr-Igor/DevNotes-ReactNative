import * as S from './style';
import { ListItem } from '../../types/List';

type NoteItemProps = {
  data: ListItem;
  onPress: (id: number) => void;
};

export const NoteItem = ({ data, onPress }: NoteItemProps) => {
  return (
    <S.Container onPress={() => onPress(data.id)}>
      <S.Title>{data.title}</S.Title>
    </S.Container>
  );
};
