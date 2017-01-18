import { StyleSheet } from 'react-native';


const EventRowStyles = StyleSheet.create({
  eventRow: {
    backgroundColor: '#009C6F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
  bellButtonStyle: {
    width: 45,
    height: 45,
  },
  bellRow: {
    flexDirection: 'row',
  },
  bellCountStyle: {
    color: 'white',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    right: 20,
    fontSize: 11,
    backgroundColor: 'violet',
    borderRadius: 25,
    width: 15,
    height: 15,
    textAlign: 'center',
  },
  eventLabel: {
    color: 'white',
    marginLeft: 15,
  },
});


export default EventRowStyles;
