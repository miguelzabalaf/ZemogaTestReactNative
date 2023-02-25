import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { Colors, Spacings } from 'react-native-ui-lib';
import { ButtonStylesProps } from '../interfaces';
import { isIOS } from 'src/helpers/quickFunctions';

export function buttonIconStyles(props: ButtonStylesProps) {
  const { color, loading, disabled } = props;
  function getBackgroundColor() {
    if (loading || disabled) {
      return Colors.grayLight;
    }
    if (color) {
      return color;
    }
    return Colors.primary;
  }
  return ScaledSheet.create({
    containerStyle: {
      height: moderateScale(40),
      backgroundColor: getBackgroundColor(),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      borderRadius: moderateScale(isIOS() ? 8 : 0),
    },
    containerIconStyle: {
      paddingRight: Spacings.s3,
    },
  });
}
