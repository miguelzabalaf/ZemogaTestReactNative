import React from 'react';
import { Text, View } from 'react-native-ui-lib';
import { HeaderExpandableSectionProps } from './interfaces';
import { headerExpandableSectionStyles } from './styles';

export function HeaderExpandableSection(props: HeaderExpandableSectionProps) {
  const { Icon, label } = props;
  const { containerStyle, containerIconStyle, labelStyle } =
    headerExpandableSectionStyles();
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <View style={containerIconStyle}>
        <Icon />
      </View>
    </View>
  );
}
