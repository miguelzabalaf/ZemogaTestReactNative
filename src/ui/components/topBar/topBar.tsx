import React from 'react';
import { View } from 'react-native-ui-lib';
import { topBarStyles } from './styles';
import { Layout } from './../../../ui/containers/layout';
import { Icon } from './../../../ui/icons';
import { Touchable } from './../../../ui/containers/touchable';
import { TopBarProps } from './interfaces/interfaces';
import { popTo } from './../../../navigation/helpers/navigation';

export function TopBar(props: TopBarProps): JSX.Element {
  const {
    showBorderBottomOfTopBar,
    showGoBack,
    lastScreenName,
    IconRight,
    onPressIconRight,
  } = props;
  const { containerStyle, contentStyle, containerIconStyle } = topBarStyles({
    showBorderBottomOfTopBar,
  });
  return (
    <View style={containerStyle}>
      <Layout.ContentWithPaddingHorizontal>
        <View style={contentStyle}>
          <View style={containerIconStyle}>
            {showGoBack && (
              <Touchable onPress={() => popTo({ screenName: lastScreenName })}>
                <Icon.ArrowLeft />
              </Touchable>
            )}
          </View>
          <Icon.ZemogaLogo />
          <View style={containerIconStyle}>
            {IconRight && (
              <Touchable onPress={onPressIconRight}>
                <IconRight />
              </Touchable>
            )}
          </View>
        </View>
      </Layout.ContentWithPaddingHorizontal>
    </View>
  );
}
