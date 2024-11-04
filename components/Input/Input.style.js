import { StyleSheet } from 'react-native';

export const inputStyles = StyleSheet.create({
  container: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  input: {
    paddingLeft: 25,
    padding: 10,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    fontSize: 20
  },
  unit: {
    position: 'absolute',
    fontSize: 35,
    alignSelf: 'flex-end',
    paddingRight: 25,
  },
});
