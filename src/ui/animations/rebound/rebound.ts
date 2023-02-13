import { useRef } from 'react';
import { Animated } from 'react-native';

const reboundanimationInitialConfig = {
  scale1: { toValue: 0.99, duration: 50 }, // In
  scale2: { toValue: 0.999, duration: 100 }, // Out
  scale3: { toValue: 1, duration: 100 }, // Normal
};

export function useReboundAnimation(
  config = reboundanimationInitialConfig,
  onAnimationFinish?: () => void,
) {
  const scaleValue = useRef(new Animated.Value(1)).current;

  function handleScale() {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: config.scale1.toValue,
        duration: config.scale1.duration,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: config.scale2.toValue,
        duration: config.scale2.duration,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: config.scale3.toValue,
        duration: config.scale3.duration,
        useNativeDriver: true,
      }),
    ]).start(() => onAnimationFinish && onAnimationFinish());
  }

  function handleScaleIn() {
    Animated.timing(scaleValue, {
      toValue: config.scale1.toValue,
      duration: config.scale1.duration,
      useNativeDriver: true,
    }).start();
  }

  function handleScaleOut() {
    Animated.timing(scaleValue, {
      toValue: config.scale2.toValue,
      duration: config.scale2.duration,
      useNativeDriver: true,
    });
  }

  return {
    scaleValue,
    handleScale,
    handleScaleIn,
    handleScaleOut,
  };
}
