import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import StackDefault from '../pages/StackDefault';
// import TabDefault from '../navigators/Tab';
import List from '../pages/List';
import Note from '../pages/Note';

type RootStackParamList = {
  List: undefined;
  Note: { id: number };
};

const MainStack = createNativeStackNavigator<RootStackParamList>();

const DefaultStack = () => (
  <MainStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#222'
      },
      headerTintColor: '#fff'
    }}
  >
    <MainStack.Screen name="List" component={List} />
    <MainStack.Screen name="Note" component={Note} />
  </MainStack.Navigator>
);

export default DefaultStack;
