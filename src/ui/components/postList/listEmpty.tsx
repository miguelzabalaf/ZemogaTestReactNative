import React from 'react';
import { Text, View, Colors, Spacings } from 'react-native-ui-lib';
import { PostItem } from './postItem';
import { Separator } from './../separator';
import { ListEmptyProps } from './interfaces';
import { Icon } from 'src/ui/icons';
import strings from 'src/constants/strings';
import { ButtonIcon } from '../buttonIcon';
import { listEmptyStyles } from './styles';

export function ListEmpty(props: ListEmptyProps): JSX.Element {
  // Props
  const { loading, hasError, onTryAgain } = props;

  // Styles
  const { containerStyle, buttonActionStyle } = listEmptyStyles();

  if (hasError) {
    return (
      <View style={containerStyle} flex>
        <Icon.WiffiOff color={Colors.grayLight} scale={2.5} />
        <View height={Spacings.s6} />
        <Text text textMuted>
          {strings.labels.weHaveProblemsToLoadPosts}
        </Text>
        <View height={Spacings.s3} />
        <ButtonIcon
          loading={loading}
          style={buttonActionStyle}
          label={strings.labels.tryAgain}
          onPress={onTryAgain}
          Icon={() => Icon.ArrowRepeat({ color: Colors.white, scale: 0.5 })}
        />
      </View>
    );
  } else {
    return (
      <View>
        {Array.from({ length: 15 }).map((_, index) => (
          <View key={index}>
            <PostItem loading={loading} onPress={() => {}} />
            <Separator />
          </View>
        ))}
      </View>
    );
  }
}
