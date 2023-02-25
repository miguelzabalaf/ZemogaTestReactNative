import { Colors, Typography } from 'react-native-ui-lib';
import { colors } from '../constants/colors';
import { typography } from '../constants/typography';

export function presetStyles() {
  Colors.loadColors({
    primary: colors.primary,
    secondary: colors.secondary,
    text: colors.text,
    textMuted: colors.textMuted,
    gray: colors.gray,
    grayLight: colors.grayLight,
  });

  Typography.loadTypographies({
    title: typography.title,
    titlePage: typography.titlePage,
    subTitle: typography.subTitle,
    textCenter: typography.textCenter,
    text: typography.text,
    smallText: typography.smallText,
    lowercase: typography.lowercase,
  });
}
