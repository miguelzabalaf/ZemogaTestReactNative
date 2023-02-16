import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { Colors, Spacings } from 'react-native-ui-lib';
import { PageStylesProps } from '../interfaces';
import { ViewStyle } from 'react-native/types';

export function pageStyles(props: PageStylesProps) {
  const { contentWithoutPaddingTop, center } = props;
  const contentStyleBase: ViewStyle = {
    backgroundColor: Colors.white,
    paddingTop: contentWithoutPaddingTop ? 0 : Spacings.s6,
    flex: 1,
    position: 'relative',
  };
  return ScaledSheet.create({
    containerStyle: {
      backgroundColor: Colors.white,
      position: 'relative',
      flex: 1,
    },
    contentStyle: center
      ? { ...contentStyleBase, justifyContent: 'center', alignItems: 'center' }
      : { ...contentStyleBase },
    connectionStyle: {
      height: moderateScale(35),
      backgroundColor: Colors.yellow80,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
  });
}

export function contentWithPaddingHorizontalStyles() {
  return ScaledSheet.create({
    contentStyle: {
      paddingHorizontal: Spacings.s3,
    },
  });
}
