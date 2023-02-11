import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { Colors } from 'react-native-ui-lib';
import { isIOS } from './../../../../helpers/quickFunctions';
import { TopBarStyleProps } from '../interfaces';

export function topBarStyles(props: TopBarStyleProps) {
  const { hideBorderBottomOfTopBar } = props;
  return ScaledSheet.create({
    containerStyle: {
      backgroundColor: Colors.white,
      borderBottomColor: hideBorderBottomOfTopBar ? 'transparent' : Colors.gray,
      borderBottomWidth: isIOS() ? 0.2 : 0.55,
      paddingVertical: moderateScale(10),
    },
    contentStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    containerIconStyle: {
      width: moderateScale(35),
      height: moderateScale(35),
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
}
