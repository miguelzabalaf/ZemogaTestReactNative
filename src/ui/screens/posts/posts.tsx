import React from 'react';
import { Layout } from '../../containers/layout';
import { ScreenProps } from './../../../ui/interfaces/interfaces';
import { PostList } from './../../../ui/components/postList';
import { useNavigationController } from './controllers/navigation.controller';
import { useDataController } from './controllers/data.controller';

export function PostsScreen(props: ScreenProps): JSX.Element {
  // Props
  const { componentId, lastScreenName } = props;

  // Controllers
  const { goToDetailBy } = useNavigationController({ componentId });
  const {
    // States
    loadingPosts,
    errorToLoadPosts,
    // Data
    posts,
    // Methods
    onTryAgainGetPosts,
  } = useDataController();

  return (
    <Layout.Page
      withoutScroll
      contentWithoutPaddingTop
      lastScreenName={lastScreenName}>
      <PostList
        posts={posts}
        goToDetailBy={goToDetailBy}
        loading={loadingPosts}
        hasError={errorToLoadPosts}
        onTryAgain={onTryAgainGetPosts}
      />
    </Layout.Page>
  );
}
