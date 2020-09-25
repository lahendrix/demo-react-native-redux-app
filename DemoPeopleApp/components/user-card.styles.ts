import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ApplicationStyles, Fonts, Metrics} from '../themes';

export default StyleSheet.create({
  ...ApplicationStyles,
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.silver,
    padding: Metrics.doubleBaseMargin,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: Fonts.type.bold,
    color: Colors.black,
  },
  email: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    fontFamily: Fonts.type.base,
    color: 'gray',
  },
});
