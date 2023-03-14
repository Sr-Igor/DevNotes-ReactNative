import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const MainTab = createBottomTabNavigator();

import TabBar from '../components/TabBar';
import TabDefault from '../pages/TabDefault';
import TabDefault1 from '../pages/TabDefault1';
import TabDefault2 from '../pages/TabDefault2';

const DefaultTab = () => (
  <MainTab.Navigator
    initialRouteName="Default"
    tabBar={(props) => <TabBar {...props} />}
  >
    <MainTab.Screen
      name="Tab 1"
      component={TabDefault1}
      options={{
        tabBarLabel: 'Tab 1'
      }}
    />
    <MainTab.Screen
      name="Default"
      component={TabDefault}
      options={{
        tabBarLabel: 'Default'
      }}
    />
    <MainTab.Screen
      name="Tab 2"
      component={TabDefault2}
      options={{
        tabBarLabel: 'Tab 2'
      }}
    />
  </MainTab.Navigator>
);

export default DefaultTab;
