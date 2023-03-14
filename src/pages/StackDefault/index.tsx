import { View, Text, Button } from 'react-native';

import { useAppSelector, useAppDispatch } from '../../hooks/redux-hook';
import { userLoginAction } from '../../redux/reducers/user/actions';
import { State } from '../../redux/reducers/user';

const StackDefault = (props: {
  navigation: { navigate: (arg0: string, arg1: { name: string }) => void };
}) => {
  const profile = useAppSelector((state) => state?.profile as State);
  const dispatch = useAppDispatch();

  const handleNavigate = () => {
    props.navigation.navigate('TabDefault', { name: 'TabDefault' });
  };

  return (
    <View>
      <Text>StackDefault</Text>
      <Text>{profile.user}</Text>
      <Text>{profile.email}</Text>

      <Button
        title="Login"
        onPress={() =>
          dispatch(
            userLoginAction({ user: 'UserLogged', email: 'user@email.com' })
          )
        }
      />
      <Button title="Go to TabDefault" onPress={handleNavigate} />
    </View>
  );
};

export default StackDefault;
