import React from 'react';
import { Touchable } from './../../../ui/containers/touchable/touchable';
import { Colors, Text, View } from 'react-native-ui-lib';
import { ButtonIconProps } from './interfaces';
import { buttonIconStyles } from './styles';
import { ActivityIndicator } from 'react-native/';

export function ButtonIcon(props: ButtonIconProps): JSX.Element {
  const { Icon, iconColor, onPress, label, color, loading, disabled } = props;
  const { containerStyle, containerIconStyle } = buttonIconStyles({
    color,
    loading,
    disabled,
  });
  return (
    <Touchable disabled={disabled} onPress={onPress}>
      <View style={containerStyle}>
        {loading ? (
          <ActivityIndicator size={20} color={Colors.white} />
        ) : (
          <>
            <View style={containerIconStyle}>
              <Icon scale={0.35} color={iconColor} />
            </View>
            <View>
              <Text smallText white>
                {label}
              </Text>
            </View>
          </>
        )}
      </View>
    </Touchable>
  );
}
