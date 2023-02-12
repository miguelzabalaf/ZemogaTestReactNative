import React from 'react';
import { View } from 'react-native-ui-lib';
import { itemSeparatorStyles } from './styles/styles';

export function ItemSeparator(): JSX.Element {
  const { containerStyle } = itemSeparatorStyles();
  return <View style={containerStyle} />;
}
