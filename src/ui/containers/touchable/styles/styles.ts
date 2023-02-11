import { ScaledSheet } from 'react-native-size-matters';

export function touchableStyles() {
  return ScaledSheet.create({
    containerStyle: {
      flex: 1,
    },
    contentStyle: {
      flex: 1,
    },
  });
}
