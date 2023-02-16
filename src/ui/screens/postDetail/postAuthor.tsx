import React from 'react';
import { Layout } from '../../containers/layout';
import { Spacings, Text, View } from 'react-native-ui-lib';
import strings from '../../../constants/strings';
import { PostAuthorProps } from './interfaces';
import { Sekeleton } from 'src/ui/components/skeleton';
import { SkeletonSize } from 'src/ui/components/skeleton/interfaces';

export function PostAuthor(props: PostAuthorProps) {
  // Props
  const { name, email, username, loading, hasError } = props;

  if (hasError) {
    return null;
  } else {
    return (
      <Layout.ContentWithPaddingHorizontal>
        <Text textMuted smallText>
          {strings.labels.author}
        </Text>
        {loading ? (
          <Sekeleton.Text size={SkeletonSize.Large} width={'55%'} />
        ) : (
          <Text subTitle>
            {name} {'·'} <Text textMuted>{username}</Text>
          </Text>
        )}
        {loading ? (
          <Sekeleton.Text size={SkeletonSize.Small} width={'25%'} />
        ) : (
          <Text text lowercase textMuted>
            {email}
          </Text>
        )}
        <View height={Spacings.s3 * 2} />
      </Layout.ContentWithPaddingHorizontal>
    );
  }
}
