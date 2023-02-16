import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { Colors, Spacings } from 'react-native-ui-lib';
import { PostItemStylesProps } from '../interfaces';

export function postItemStyles(props: PostItemStylesProps) {
  const { isFavoritePost, editMode } = props;
  function getOpacity() {
    if (editMode) {
      if (isFavoritePost) {
        return 0.25;
      }
      return 1;
    }
    return 1;
  }
  return ScaledSheet.create({
    containerStyle: {
      opacity: getOpacity(),
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

export function listEmptyStyles() {
  return ScaledSheet.create({
    containerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: moderateScale(150),
    },
    buttonActionStyle: {
      width: moderateScale(50),
      height: moderateScale(25),
      marginVertical: Spacings.s3,
    },
  });
}
