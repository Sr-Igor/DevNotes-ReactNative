import { View, Text, Button } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../hooks/redux-hook';
import { userLogoutAction } from '../../redux/reducers/user/actions';
import { State } from '../../redux/reducers/user';

const StackDefault = () => {
  const profile = useAppSelector((state) => state?.profile as State);
  const dispatch = useAppDispatch();

  return (
    <View>
      <Text>TabDefault</Text>
      <Text>{profile.user}</Text>
      <Text>{profile.email}</Text>
      <Button title="Logout" onPress={() => dispatch(userLogoutAction())} />
    </View>
  );
};

export default StackDefault;
