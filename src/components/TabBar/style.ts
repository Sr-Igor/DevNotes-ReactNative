import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ccc'
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  },
  middleTab: {
    height: 70,
    width: 70,
    backgroundColor: '#f2a900',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -20,
    borderRadius: 35
  },
  label: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  },
  labelFocused: {
    color: '#0000ff',
    fontSize: 16
  }
});
