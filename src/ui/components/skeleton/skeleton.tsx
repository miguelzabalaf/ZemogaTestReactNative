import React from 'react';
import { Colors, View, Spacings } from 'react-native-ui-lib';
import { moderateScale } from 'react-native-size-matters';
import { SkeletonProps } from './interfaces';

export function Text(props: SkeletonProps): JSX.Element {
  const { width, size } = props;
  return (
    <View>
      <View
        backgroundColor={Colors.grayLight}
        height={moderateScale(size)}
        width={width}
      />
      <View height={Spacings.s1} />
    </View>
  );
}
