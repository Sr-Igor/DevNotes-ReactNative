import type { RouteProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

//General Stack Types
export type RootStackParamList = {
  List: undefined;
  Note: { id: number } | undefined;
};

//Note Page Types
export type NoteScreenRouteProp = RouteProp<RootStackParamList, 'Note'>;

export type NoteScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Note'>,
  BottomTabNavigationProp<RootStackParamList>
>;
