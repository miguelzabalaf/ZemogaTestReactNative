import React from 'react';
import { ScrollView } from 'react-native';
import { ContainerProps } from 'src/ui/interfaces';
import { contentWithPaddingHorizontalStyles, pageStyles } from './styles';
import { PageProps } from './interfaces';
import { TopBar } from 'src/ui/components/topBar';
import {
  SafeAreaSpacerView,
  Spacings,
  Text,
  View,
  Colors,
} from 'react-native-ui-lib';
import { usePageController } from './controllers/usePage.controller';
import strings from 'src/constants/strings';
import { Icon } from 'src/ui/icons';

export function Page(props: PageProps): JSX.Element {
  const {
    children,
    withoutScroll,
    contentWithoutPaddingTop,
    center,
    hideTopBar,
    showGoBack,
    lastScreenName,
    IconRight,
    onPressIconRight,
    isModal,
    title,
  } = props;
  const { containerStyle, contentStyle, connectionStyle } = pageStyles({
    contentWithoutPaddingTop,
    center,
  });
  const { handleOnScrollContent, showBorderBottomOfTopBar, isUserConnected } =
    usePageController();
  return (
    <View style={containerStyle}>
      <SafeAreaSpacerView />
      {!hideTopBar && (
        <TopBar
          isModal={isModal}
          showBorderBottomOfTopBar={showBorderBottomOfTopBar}
          showGoBack={showGoBack}
          lastScreenName={lastScreenName}
          IconRight={IconRight}
          onPressIconRight={onPressIconRight}
          title={title}
        />
      )}
      {!hideTopBar && !isUserConnected && (
        <View style={connectionStyle}>
          <Text small textMuted>
            {strings.labels.rigthNowYouAreInOfflineMode}
          </Text>
          <View width={Spacings.s2} />
          <Icon.WiffiOff scale={0.5} color={Colors.textMuted} />
        </View>
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
