import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    textAlign: 'center',
  },
  subTitle: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'gray',
    textAlign: 'center',
  },
});
