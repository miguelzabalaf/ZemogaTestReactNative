import React from 'react';
import { Layout } from '../../containers/layout';
import { ScreenProps } from './../../../ui/interfaces/interfaces';
import { PostList } from './../../../ui/components/postList';
import { useNavigationController } from './controllers/navigation.controller';
import { useDataController } from './controllers/data.controller';

export function PostsScreen(props: ScreenProps): JSX.Element {
  const { componentId, lastScreenName } = props;
  const { goToDetailBy } = useNavigationController({ componentId });
  const { posts } = useDataController();

  return (
    <Layout.Page
      withoutScroll
      contentWithoutPaddingTop
      lastScreenName={lastScreenName}>
      <PostList posts={posts} goToDetailBy={goToDetailBy} />
    </Layout.Page>
  );
}
