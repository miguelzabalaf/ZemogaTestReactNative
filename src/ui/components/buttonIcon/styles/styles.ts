import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { Colors, Spacings } from 'react-native-ui-lib';
import { ButtonStylesProps } from '../interfaces';

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
      flex: 1,
      height: moderateScale(50),
      backgroundColor: getBackgroundColor(),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    containerIconStyle: {
      paddingRight: Spacings.s3,
    },
  });
}
