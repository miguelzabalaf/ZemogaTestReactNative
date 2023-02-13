import React from 'react';
import { Touchable } from './../../../ui/containers/touchable/touchable';
import { Text, View } from 'react-native-ui-lib';
import { ButtonIconProps } from './interfaces';
import { buttonIconStyles } from './styles';

export function ButtonIcon(props: ButtonIconProps): JSX.Element {
  const { Icon, iconColor, onPress, label, color } = props;
  const { containerStyle, containerIconStyle } = buttonIconStyles({ color });
  return (
    <Touchable onPress={onPress}>
      <View style={containerStyle}>
        <View style={containerIconStyle}>
          <Icon scale={0.5} color={iconColor} />
        </View>
        <View>
          <Text normal white>
            {label}
          </Text>
        </View>
      </View>
    </Touchable>
  );
}
