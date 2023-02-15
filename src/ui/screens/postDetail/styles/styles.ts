import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { Colors, Spacings } from 'react-native-ui-lib';
import { isIOS } from 'src/helpers/quickFunctions';

export function postDetailStyles() {
  return ScaledSheet.create({
    containerContentStyle: {
      flex: 1,
      position: 'relative',
      overflow: 'hidden',
    },
    contentFooterStyle: {},
    containerMapStyle: {
      height: moderateScale(300),
      width: '100%',
      backgroundColor: Colors.grayLight,
    },
    mapStyle: {
      flex: 1,
    },
    containerActionsStyle: {
      flexDirection: 'row',
      gap: Spacings.s3,
    },
  });
}

export function postDetailActionsStyles() {
  return ScaledSheet.create({
    containerStyle: {
      flexDirection: 'row',
      gap: Spacings.s3,
      height: moderateScale(100),
      paddingBottom: moderateScale(isIOS() ? 25 : 20),
      paddingTop: moderateScale(20),
    },
  });
}
