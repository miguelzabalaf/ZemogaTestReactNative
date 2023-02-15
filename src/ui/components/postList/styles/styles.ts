import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { Colors, Spacings } from 'react-native-ui-lib';

export function postItemStyles() {
  return ScaledSheet.create({
    containerStyle: {
      paddingVertical: Spacings.s3,
      paddingHorizontal: Spacings.s3,
      flexDirection: 'row',
      alignItems: 'center',
    },
    textContainerStyle: {
      flex: 1,
      paddingRight: Spacings.s3,
      justifyContent: 'center',
    },
    favoriteIconContainerStyle: {
      width: moderateScale(35),
      height: moderateScale(35),
      justifyContent: 'center',
      alignItems: 'center',
    },
    skeletonStyle: {
      paddingVertical: Spacings.s3,
    },
  });
}

export function itemSeparatorStyles() {
  return ScaledSheet.create({
    containerStyle: {
      borderBottomColor: Colors.gray,
      borderBottomWidth: 0.35,
      opacity: 0.5,
    },
  });
}
