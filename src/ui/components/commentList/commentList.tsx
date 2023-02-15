import React from 'react';
import { CommentListProps } from './interfaces';
import { CommentItem } from './commentItem';
import { CommentEntity } from '../../../domain/entities/comment.entity';
import { useFlatlistController } from './../../controllers/flatList.controller';
import { ListFooter } from '../listFooter';
import { FlatList } from 'react-native';

export function CommentList(props: CommentListProps): JSX.Element {
  const { comments } = props;
  const {
    // Constants
    initialNumToRender,
    maxToRenderPerBatch,
    // States
    data,
    allDataRendered,
    flatListRef,
    // Methods
    onEndReached,
    goToTop,
  } = useFlatlistController<CommentEntity>({
    data: comments,
    usualyHasMoreThan15Items: false,
  });
  return (
    <FlatList
      ref={flatListRef}
      data={data}
      initialNumToRender={initialNumToRender}
      maxToRenderPerBatch={maxToRenderPerBatch}
      updateCellsBatchingPeriod={2000}
      onEndReachedThreshold={0.25}
      onEndReached={onEndReached}
      renderItem={({ item: comment }) => <CommentItem {...comment} />}
      keyExtractor={item => item.id.toString()}
      ListFooterComponent={ListFooter({
        allDataRendered,
        goToTop,
      })}
    />
  );
}
