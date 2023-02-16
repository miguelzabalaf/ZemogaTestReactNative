import React from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import { TouchableProps } from './interfaces';
import { touchableStyles } from './styles';
import { useReboundAnimation } from './../../../ui/animations/rebound';

export function Touchable(props: TouchableProps) {
  const { children, onPress, onPressIn, onPressOut } = props;
  const { containerStyle, contentStyle } = touchableStyles();
  const { handleScale, handleScaleIn, handleScaleOut, scaleValue } =
    useReboundAnimation();
  return (
    <Animated.View
      style={[{ transform: [{ scale: scaleValue }] }, containerStyle]}>
      <TouchableOpacity
        style={contentStyle}
        activeOpacity={0.75}
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
        }}
        {...props}>
        {children}
      </TouchableOpacity>
    </Animated.View>
  );
}
