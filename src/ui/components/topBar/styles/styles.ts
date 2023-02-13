import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { Colors } from 'react-native-ui-lib';
import { isIOS } from './../../../../helpers/quickFunctions';
import { TopBarStyleProps } from '../interfaces';

export function topBarStyles(props: TopBarStyleProps) {
  const { showBorderBottomOfTopBar } = props;
  return ScaledSheet.create({
    containerStyle: {
      backgroundColor: Colors.white,
      borderBottomColor: showBorderBottomOfTopBar ? Colors.gray : 'transparent',
      borderBottomWidth: isIOS() ? 0.2 : 0.55,
      paddingVertical: moderateScale(10),
    },
    contentStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    containerIconStyle: {
      width: moderateScale(50),
      height: moderateScale(50),
    },
  });
}
