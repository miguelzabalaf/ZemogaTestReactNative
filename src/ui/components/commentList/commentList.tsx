import React from 'react';
import { CommentListProps } from './interfaces';
import { CommentItem } from './commentItem';
import _ from 'lodash';
import { Spacings, Text, View } from 'react-native-ui-lib';
import { Touchable } from 'src/ui/containers/touchable';
import strings from 'src/constants/strings';
import { commentListStyles } from 'src/ui/components/commentList/styles/styles';

export function CommentList(props: CommentListProps): JSX.Element {
  const { comments } = props;
  const { seeAlButtonStyle } = commentListStyles();
  return (
    <View>
      <View height={Spacings.s3} />
      {_.map(comments, (comment, index) => {
        return <CommentItem {...comment} key={index} />;
      })}
      <Touchable style={seeAlButtonStyle}>
        <Text primary>{strings.labels.seeAll}</Text>
      </Touchable>
    </View>
  );
}
