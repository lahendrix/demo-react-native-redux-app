import {StyleSheet} from 'react-native';
import {ApplicationStyles, Colors, Fonts, Metrics} from '../themes';

export default StyleSheet.create({
  ...ApplicationStyles,
  sectionHeader: {
    padding: Metrics.doubleBaseMargin,
    backgroundColor: Colors.facebook,
  },

  sectionHeaderText: {
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.type.bold,
    color: Colors.snow,
  },
});
