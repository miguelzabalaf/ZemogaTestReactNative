import React from 'react';
import { Animated, TouchableHighlight } from 'react-native';
import { TouchableProps } from './interfaces';
import { touchableStyles } from './styles';
import { useReboundAnimation } from './../../../ui/animations/rebound';
import { Colors } from 'react-native-ui-lib';

export function Touchable(props: TouchableProps) {
  const { children, onPress, onPressIn, onPressOut } = props;
  const { containerStyle, contentStyle } = touchableStyles();
  const { handleScale, handleScaleIn, handleScaleOut, scaleValue } =
    useReboundAnimation();
  return (
    <Animated.View
      style={[{ transform: [{ scale: scaleValue }] }, containerStyle]}>
      <TouchableHighlight
        {...props}
        underlayColor={Colors.grayLight}
        style={contentStyle}
        activeOpacity={0.85}
        onPress={event => {
          handleScale();
          onPress && onPress(event);
        }}
        onPressIn={event => {
          onPressIn && onPressIn(event);
          handleScaleIn();
        }}
        onPressOut={event => {
          onPressOut && onPressOut(event);
          handleScaleOut();
        }}>
        {children}
      </TouchableHighlight>
    </Animated.View>
  );
}
