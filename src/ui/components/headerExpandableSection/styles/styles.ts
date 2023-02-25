import { ScaledSheet } from 'react-native-size-matters';
import { Spacings, Colors } from 'react-native-ui-lib';
import { fonts } from 'src/ui/constants/fonts';

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
      fontFamily: fonts.montserratRegular,
    },
    containerIconStyle: {
      marginHorizontal: Spacings.s3,
    },
  });
}
