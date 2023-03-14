import { View, TouchableHighlight, Text } from 'react-native';
import { styles } from './style';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index: number) => {
        const { options } = descriptors[route.key];

        const handleTabPress = () => {
          navigation.navigate(route.name);
        };

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        if (route.name === 'Default') {
          return (
            <TouchableHighlight
              style={styles.middleTab}
              key={index}
              onPress={handleTabPress}
            >
              <Text
                style={[styles.label, isFocused ? styles.labelFocused : null]}
              >
                {label as string}
              </Text>
            </TouchableHighlight>
          );
        } else {
          return (
            <TouchableHighlight
              style={styles.tab}
              key={index}
              underlayColor="transparent"
              onPress={handleTabPress}
            >
              <Text
                style={[styles.label, isFocused ? styles.labelFocused : null]}
              >
                {label as string}
              </Text>
            </TouchableHighlight>
          );
        }
      })}
    </View>
  );
};

export default TabBar;
