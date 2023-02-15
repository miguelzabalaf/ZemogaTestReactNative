import React from 'react';
import { Colors, Text, View } from 'react-native-ui-lib';
import { HeaderExpandableSectionProps } from './interfaces';
import { headerExpandableSectionStyles } from './styles';
import { ActivityIndicator } from 'react-native';

export function HeaderExpandableSection(props: HeaderExpandableSectionProps) {
  const { Icon, label, loading } = props;
  const { containerStyle, containerIconStyle, labelStyle } =
    headerExpandableSectionStyles();
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <View style={containerIconStyle}>
        {loading ? (
          <ActivityIndicator size={15} color={Colors.gray} />
        ) : (
          <Icon />
        )}
      </View>
    </View>
  );
}
