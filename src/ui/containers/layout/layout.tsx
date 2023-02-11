import React from 'react';
import { ScrollView } from 'react-native';
import { ContainerProps } from './../../interfaces';
import { contentWithPaddingHorizontalStyles, pageStyles } from './styles';
import { PageProps } from './interfaces';
import { Spacings, View } from 'react-native-ui-lib';

export function Page(props: PageProps): JSX.Element {
  const { children, withoutScroll, contentWithoutPaddingTop, center } = props;
  const { containerStyle, contentStyle } = pageStyles({
    contentWithoutPaddingTop,
    center,
  });
  return (
    <View style={containerStyle}>
      {withoutScroll ? (
        <View style={contentStyle}>{children}</View>
      ) : (
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={contentStyle}>
          {children}
          <View height={Spacings.s10 * 2} />
        </ScrollView>
      )}
    </View>
  );
}

export function ContentWithPaddingHorizontal(
  props: ContainerProps,
): JSX.Element {
  const { children } = props;
  const { contentStyle } = contentWithPaddingHorizontalStyles();
  return <View style={contentStyle}>{children}</View>;
}
