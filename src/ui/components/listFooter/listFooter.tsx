import React from 'react';
import { View, Colors, Text, Spacings } from 'react-native-ui-lib';
import { ListFooterProps } from './interfaces';
import { ActivityIndicator } from 'react-native';
import { listFooterStyles } from './styles';
import { Touchable } from 'src/ui/containers/touchable';
import { Icon } from 'src/ui/icons';
import strings from 'src/constants/strings';

export function ListFooter(props: ListFooterProps): JSX.Element {
  const { allDataRendered, goToTop, showGotoTopButton } = props;
  const { containerStyle, buttonArrowUpStyle } = listFooterStyles();
  return (
    <View style={containerStyle}>
      {allDataRendered ? (
        <View>
          <Text textMuted textCenter>
            {strings.labels.endOfList}
          </Text>
          <View height={Spacings.s3} />
          {showGotoTopButton && (
            <Touchable onPress={goToTop}>
              <View style={buttonArrowUpStyle}>
                <Icon.ArrowUp color={Colors.primary} />
              </View>
            </Touchable>
          )}
        </View>
      ) : (
        <ActivityIndicator size={35} color={Colors.primary} />
      )}
    </View>
  );
}
