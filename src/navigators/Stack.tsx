import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackDefault from '../pages/StackDefault';
import TabDefault from '../navigators/Tab';

type RootStackParamList = {
  StackDefault: undefined;
  TabDefault: { name: string };
};

const MainStack = createNativeStackNavigator<RootStackParamList>();

const DefaultStack = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="StackDefault" component={StackDefault} />
    <MainStack.Screen name="TabDefault" component={TabDefault} />
  </MainStack.Navigator>
);

export default DefaultStack;
