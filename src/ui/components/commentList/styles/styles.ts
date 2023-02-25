import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { Colors, Spacings } from 'react-native-ui-lib';
import { isIOS } from 'src/helpers/quickFunctions';
import { fonts } from 'src/ui/constants/fonts';

export function commentItemStyles() {
  return ScaledSheet.create({
    containerStyle: {
      flexDirection: 'row',
    },
    containerLeft: {
      height: '100%',
    },
    badgestyle: {
      width: moderateScale(isIOS() ? 25 : 30),
      height: moderateScale(isIOS() ? 25 : 30),
      borderRadius: moderateScale(isIOS() ? 5 : 15),
      backgroundColor: Colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    badgeTextStyle: {
      fontSize: moderateScale(12),
      color: Colors.white,
      textTransform: 'uppercase',
      fontWeight: '700',
      fontFamily: fonts.montserratRegular,
    },
    perfilHeaderStyle: {
      height: 'auto',
      flex: 1,
      paddingHorizontal: Spacings.s3,
    },
    perfilNameStyle: {
      fontSize: moderateScale(12),
      color: Colors.black,
      fontWeight: '600',
      fontFamily: fonts.montserratRegular,
    },
    perfilEmailStyle: {
      fontSize: moderateScale(10),
      color: Colors.textMuted,
      textTransform: 'lowercase',
      fontFamily: fonts.montserratRegular,
    },
    bodyStyle: {
      color: Colors.black,
      fontSize: moderateScale(12),
      fontFamily: fonts.montserratRegular,
    },
  });
}
export function commentListStyles() {
  return ScaledSheet.create({
    seeAlButtonStyle: {
      paddingHorizontal: Spacings.s3,
      paddingVertical: Spacings.s2,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
}
