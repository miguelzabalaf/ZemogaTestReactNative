import React from 'react';
import { Layout } from '../../containers/layout';
import { ScreenPorps } from './../../../ui/interfaces/interfaces';
import { PostList } from './../../../ui/components/postList';
import { useNavigationController } from './controllers/navigation.controller';
import { useDataController } from './controllers/data.controller';

export function PostsScreen(props: ScreenPorps): JSX.Element {
  const { componentId } = props;
  const { goToDetailBy } = useNavigationController({ componentId });
  const { posts } = useDataController();

  return (
    <Layout.Page withoutScroll contentWithoutPaddingTop>
      <PostList posts={posts} goToDetailBy={goToDetailBy} />
    </Layout.Page>
  );
}
