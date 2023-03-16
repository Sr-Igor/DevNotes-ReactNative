import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Types
import { RootStackParamList } from '../types/Navigation';

//Stack Pages
import List from '../pages/List';
import Note from '../pages/Note';

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
