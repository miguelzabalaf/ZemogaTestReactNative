import React from 'react';
import { CommentsProps } from './interfaces';
import { Layout } from 'src/ui/containers/layout';
import { CommentList } from 'src/ui/components/commentList/commentList';

export function CommentsScreen(props: CommentsProps): JSX.Element {
  // Props
  const { lastScreenName, comments } = props;
  return (
    <Layout.Page
      showGoBack
      withoutScroll
      contentWithoutPaddingTop
      lastScreenName={lastScreenName}>
      <CommentList comments={comments} />
    </Layout.Page>
  );
}
