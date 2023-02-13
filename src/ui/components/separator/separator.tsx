import React from 'react';
import { View } from 'react-native-ui-lib';
import { separatorStyles } from './styles/styles';

export function Separator(): JSX.Element {
  const { containerStyle } = separatorStyles();
  return <View style={containerStyle} />;
}
