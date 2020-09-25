import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../themes';
export default StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: Fonts.size.h2,
    fontWeight: '600',
    color: Colors.charcoal,
    textAlign: 'center',
  },
  subTitle: {
    marginTop: 8,
    fontSize: Fonts.size.h4,
    fontWeight: '400',
    color: 'gray',
    textAlign: 'center',
  },
  sectionHeader: {
    marginTop: Metrics.doubleBaseMargin,
    marginBottom: Metrics.baseMargin,
    fontSize: Fonts.size.h5,
    fontWeight: '400',
    color: Colors.facebook,
  },
  sectionText: {
    marginTop: Metrics.baseMargin,
    fontSize: Fonts.size.input,
    color: Colors.coal,
  },
});
