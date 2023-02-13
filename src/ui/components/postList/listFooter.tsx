import React from 'react';
import { View, Colors, Text, Spacings } from 'react-native-ui-lib';
import { ListFooterProps } from './interfaces';
import { ActivityIndicator } from 'react-native';
import { listFooterStyles } from './styles';
import { Touchable } from './../../containers/touchable';
import { Icon } from './../../icons';
import strings from './../../../constants/strings';

export function ListFooter(props: ListFooterProps): JSX.Element {
  const { renderAllData, goToTop } = props;
  const { containerStyle, buttonArrowUpStyle } = listFooterStyles();
  return (
    <View style={containerStyle}>
      {renderAllData ? (
        <View>
          <Text textMuted textCenter>
            {strings.labels.endOfList}
          </Text>
          <View height={Spacings.s3} />
          <Touchable onPress={goToTop}>
            <View style={buttonArrowUpStyle}>
              <Icon.ArrowUp color={Colors.primary} />
            </View>
          </Touchable>
        </View>
      ) : (
        <ActivityIndicator size={35} color={Colors.primary} />
      )}
    </View>
  );
}
