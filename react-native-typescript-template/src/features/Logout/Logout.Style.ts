import {StyleSheet} from 'react-native';
import {fontFamily, fontSize} from '../../const';
import ApplicationStyle from '../../Themes/Application.Style';
import colors from '../../Themes/Colors';

export default StyleSheet.create({
  ...ApplicationStyle,
  titleHeader: {
    fontFamily: fontFamily.demiBold,
    color: colors.charcoalGrey,
    fontSize: fontSize.large,
    marginLeft: 50,
  },
  btnGetData: {
    backgroundColor: colors.charcoalGrey,
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },
  textGetData: {
    fontFamily: fontFamily.regular,
    color: colors.white,
    fontSize: fontSize.medium,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: 30,
  },
  body: {
    flex: 1,
    alignItems: 'center',
  },
  textData: {
    color: colors.charcoalGrey,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.regular,
    marginTop: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
