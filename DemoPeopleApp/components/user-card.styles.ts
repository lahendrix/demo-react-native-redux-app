import {StyleSheet} from 'react-native';
import {ApplicationStyles, Colors, Fonts, Metrics} from '../themes';

export default StyleSheet.create({
  ...ApplicationStyles,
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.silver,
    padding: Metrics.doubleBaseMargin,
  },
  title: {
    fontSize: Fonts.size.h6,
    fontWeight: '600',
    fontFamily: Fonts.type.bold,
    color: Colors.panther,
  },
  email: {
    marginTop: 8,
    fontSize: Fonts.size.input,
    fontWeight: '400',
    fontFamily: Fonts.type.emphasis,
    color: 'gray',
  },
});
