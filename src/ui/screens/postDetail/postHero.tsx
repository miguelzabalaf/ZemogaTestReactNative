import React from 'react';
import { PostEntity } from 'src/domain/entities/post.entity';
import { Layout } from 'src/ui/containers/layout';
import { Spacings, Text, View } from 'react-native-ui-lib';
import strings from 'src/constants/strings';
import { capitalizeFirstLetter } from 'src/helpers/quickFunctions';

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
