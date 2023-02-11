import React from 'react';
import { Layout } from '../../containers/layout';
import { Text } from 'react-native-ui-lib';
import { ScreenPorps } from 'src/ui/interfaces/interfaces';

export function PostsScreen(props: ScreenPorps): JSX.Element {
  const {} = props;
  return (
    <Layout.Page>
      <Text>Posts</Text>
    </Layout.Page>
  );
}
