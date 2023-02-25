import React from 'react';
import { CommentListPreviewProps } from './interfaces';
import { CommentItem } from './commentItem';
import _ from 'lodash';
import { Spacings, Text, View } from 'react-native-ui-lib';
import { Touchable } from 'src/ui/containers/touchable';
import strings from 'src/constants/strings';
import { commentListStyles } from 'src/ui/components/commentList/styles/styles';

export function CommentListPreview(
  props: CommentListPreviewProps,
): JSX.Element {
  const { comments, onPressSeeAll } = props;
  const { seeAlButtonStyle } = commentListStyles();
  return (
    <View>
      <View height={Spacings.s3} />
      {_.map(comments, (comment, index) => {
        return <CommentItem {...comment} key={index} />;
      })}
      <Touchable onPress={onPressSeeAll} style={seeAlButtonStyle}>
        <Text smallText primary>
          {strings.labels.seeAll}
        </Text>
      </Touchable>
    </View>
  );
}
