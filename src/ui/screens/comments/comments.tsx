import React from 'react';
import { CommentsProps } from './interfaces';
import { Layout } from 'src/ui/containers/layout';
import { CommentList } from 'src/ui/components/commentList/commentList';

export function CommentsScreen(props: CommentsProps): JSX.Element {
  // Props
  const { lastScreenName, comments, isModal, title } = props;
  return (
    <Layout.Page
      showGoBack
      withoutScroll
      contentWithoutPaddingTop
      isModal={isModal}
      lastScreenName={lastScreenName}
      title={title}>
      <CommentList comments={comments} />
    </Layout.Page>
  );
}
