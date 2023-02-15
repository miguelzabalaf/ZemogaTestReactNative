import React from 'react';
import { CommentsProps } from './interfaces';
import { Layout } from './../../containers/layout';
import { CommentList } from './../../components/commentList/commentList';

export function CommentsScreen(props: CommentsProps): JSX.Element {
  const { lastScreenName, comments } = props;
  return (
    <Layout.Page showGoBack withoutScroll lastScreenName={lastScreenName}>
      <CommentList comments={comments} />
    </Layout.Page>
  );
}
