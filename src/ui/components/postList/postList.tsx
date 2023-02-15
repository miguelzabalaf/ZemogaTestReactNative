import React from 'react';
import { FlatList } from 'react-native';
import { PostEntity } from 'src/domain/entities/post.entity';
import { PostItem } from './postItem';
import { Separator } from './../../components/separator';
import { ListFooter } from '../listFooter';
import { ListEmpty } from './listEmpty';
import { PostListProps } from 'src/ui/screens/posts/interfaces';
import { useFlatlistController } from 'src/ui/controllers/flatList.controller';

export function PostList(props: PostListProps): JSX.Element {
  const { posts, goToDetailBy } = props;
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
  } = useFlatlistController<PostEntity>({
    data: posts,
    usualyHasMoreThan15Items: true,
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
      renderItem={({ item: post }) => (
        <PostItem showContent onPress={() => goToDetailBy(post.id)} {...post} />
      )}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={Separator}
      ListFooterComponent={ListFooter({
        allDataRendered,
        goToTop,
      })}
      ListEmptyComponent={ListEmpty}
    />
  );
}
