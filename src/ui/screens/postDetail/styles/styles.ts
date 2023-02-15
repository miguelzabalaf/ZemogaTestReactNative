import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { Colors, Spacings } from 'react-native-ui-lib';

export function postDetailStyles() {
  return ScaledSheet.create({
    containerMapStyle: {
      height: moderateScale(300),
      width: '100%',
      backgroundColor: Colors.textMuted,
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
    },
  });
}
