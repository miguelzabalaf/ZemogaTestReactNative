import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { Colors, Spacings } from 'react-native-ui-lib';
import { ButtonStylesProps } from '../interfaces';

export function buttonIconStyles(props: ButtonStylesProps) {
  const { color } = props;
  return ScaledSheet.create({
    containerStyle: {
      flex: 1,
      height: moderateScale(50),
      backgroundColor: color ?? Colors.primary,
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
