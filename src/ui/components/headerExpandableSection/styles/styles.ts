import { ScaledSheet } from 'react-native-size-matters';
import { Spacings, Colors } from 'react-native-ui-lib';

export function headerExpandableSectionStyles() {
  return ScaledSheet.create({
    containerStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: Spacings.s3,
    },
    labelStyle: {
      color: Colors.textMuted,
    },
    containerIconStyle: {
      marginHorizontal: Spacings.s3,
    },
  });
}
