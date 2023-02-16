import { ScaledSheet } from 'react-native-size-matters';
import { Colors } from 'react-native-ui-lib';

export function separatorStyles() {
  return ScaledSheet.create({
    containerStyle: {
      borderBottomColor: Colors.gray,
      borderBottomWidth: 0.35,
      opacity: 0.5,
    },
  });
}
