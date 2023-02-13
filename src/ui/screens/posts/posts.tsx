import React from 'react';
import { Layout } from '../../containers/layout';
import { ScreenPorps } from './../../../ui/interfaces/interfaces';
import { PostList } from './../../../ui/components/postList';
import { useNavigationController } from './controllers/navigation.controller';

export function PostsScreen(props: ScreenPorps): JSX.Element {
  const { componentId } = props;
  const { goToDetailBy } = useNavigationController({ componentId });

  return (
    <Layout.Page withoutScroll contentWithoutPaddingTop>
      <PostList goToDetailBy={goToDetailBy} />
    </Layout.Page>
  );
}
