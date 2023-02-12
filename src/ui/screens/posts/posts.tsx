import React from 'react';
import { Layout } from '../../containers/layout';
import { ScreenPorps } from 'src/ui/interfaces/interfaces';
import { PostList } from './../../../ui/components/postList';

export function PostsScreen(props: ScreenPorps): JSX.Element {
  const {} = props;
  return (
    <Layout.Page withoutScroll contentWithoutPaddingTop>
      <PostList />
    </Layout.Page>
  );
}
