import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  notifyList: {
    flex: 1,
    backgroundColor: '#F6F6F8',
    flexDirection: 'column',
  },
  buttonsBlock: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 5,
  },
  sendingBlock: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainerStyle: {
    flex: 2,
  },
  buttonStyle: {
    flex: 1.5,
    marginTop: 5,
    backgroundColor: '#9824AC',
  },
});

export default styles;
