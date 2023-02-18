import React from 'react';
import { Text, View, Colors, Spacings } from 'react-native-ui-lib';
import { PostItem } from './postItem';
import { Separator } from 'src/ui/components/separator';
import { ListEmptyProps } from './interfaces';
import { Icon } from 'src/ui/icons';
import strings from 'src/constants/strings';
import { ButtonIcon } from 'src/ui/components/buttonIcon';
import { listEmptyStyles } from './styles';

export function ListEmpty(props: ListEmptyProps): JSX.Element {
  // Props
  const { loading, hasError, onTryAgain } = props;

  // Styles
  const { containerStyle, buttonActionStyle } = listEmptyStyles();

  if (loading) {
    return (
      <View>
        {Array.from({ length: 15 }).map((_, index) => (
          <View key={index}>
            <PostItem editMode={false} loading={loading} onPress={() => {}} />
            <Separator />
          </View>
        ))}
      </View>
    );
  }

  return (
    <View style={containerStyle} flex>
      {Icon[hasError ? 'WiffiOff' : 'Layout']({
        color: Colors.grayLight,
        scale: 2.5,
      })}
      <View height={Spacings.s6} />
      <Text text textMuted>
        {strings.labels[hasError ? 'weHaveProblemsToLoadPosts' : 'noHavePosts']}
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
}
