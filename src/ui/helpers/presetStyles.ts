import { Colors, Typography } from 'react-native-ui-lib';
import { colors } from '../constants/colors';

export function presetStyles() {
  Colors.loadColors({
    primary: colors.primary,
    secondary: colors.secondary,
    text: colors.text,
    textMuted: colors.textMuted,
    gray: colors.gray,
  });

  Typography.loadTypographies({});
}
