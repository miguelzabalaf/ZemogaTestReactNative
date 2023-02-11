import React from 'react';
import { ScrollView } from 'react-native';
import { ContainerProps } from './../../interfaces';
import { contentWithPaddingHorizontalStyles, pageStyles } from './styles';
import { PageProps } from './interfaces';
import { TopBar } from './../../components/topBar';
import { SafeAreaSpacerView, Spacings, View } from 'react-native-ui-lib';
import { usePageController } from '../controllers/usePage.controller';

export function Page(props: PageProps): JSX.Element {
  const {
    children,
    withoutScroll,
    contentWithoutPaddingTop,
    center,
    hideTopBar,
  } = props;
  const { containerStyle, contentStyle } = pageStyles({
    contentWithoutPaddingTop,
    center,
  });
  const { handleOnScrollContent, hideBorderBottomOfTopBar } =
    usePageController();
  return (
    <View style={containerStyle}>
      <SafeAreaSpacerView />
      {!hideTopBar && (
        <TopBar hideBorderBottomOfTopBar={hideBorderBottomOfTopBar} />
      )}
      {withoutScroll ? (
        <View style={contentStyle}>{children}</View>
      ) : (
        <ScrollView
          scrollEventThrottle={10000}
          onScroll={handleOnScrollContent}
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
