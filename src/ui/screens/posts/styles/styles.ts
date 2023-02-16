import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { isIOS } from 'src/helpers/quickFunctions';

export function postStyles() {
  return ScaledSheet.create({
    containerContentStyle: {
      flex: 1,
    },
    deteleAllContainerStyles: {
      height: moderateScale(isIOS() ? 85 : 50),
    },
  });
}
