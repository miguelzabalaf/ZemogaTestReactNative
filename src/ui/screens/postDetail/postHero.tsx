import React from 'react';
import { PostEntity } from '../../../domain/entities/post.entity';
import { Layout } from '../../containers/layout';
import { Spacings, Text, View } from 'react-native-ui-lib';
import strings from '../../../constants/strings';
import { capitalizeFirstLetter } from '../../../helpers/quickFunctions';

export function PostHero(props: Partial<PostEntity>) {
  // Props
  const { title, body } = props;

  return (
    <Layout.ContentWithPaddingHorizontal>
      <View height={Spacings.s3} />
      <Text textMuted smallText>
        {strings.labels.post}
      </Text>
      <Text title black>
        {capitalizeFirstLetter(title)}
      </Text>
      <View height={Spacings.s3} />
      <Text text>{capitalizeFirstLetter(body)}</Text>
    </Layout.ContentWithPaddingHorizontal>
  );
}
