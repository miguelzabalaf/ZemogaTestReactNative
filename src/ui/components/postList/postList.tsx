import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { PostEntity } from 'src/domain/entities/post.entity';
import { PostItem } from './postItem';
import { Separator } from './../../components/separator';
import { ListFooter } from '../listFooter';
import { ListEmpty } from './listEmpty';
import { PostListProps } from 'src/ui/screens/posts/interfaces';
import { useFlatlistController } from 'src/ui/controllers/flatList.controller';
import { Colors } from 'react-native-ui-lib';

export function PostList(props: PostListProps): JSX.Element {
  const { posts, goToDetailBy, loading, hasError, onTryAgain } = props;
  const {
    // Constants
    initialNumToRender,
    maxToRenderPerBatch,
    showGotoTopButton,
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
      data={loading ? [] : data}
      onRefresh={onTryAgain}
      refreshing={loading}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={onTryAgain}
          colors={[Colors.primary]}
          tintColor={Colors.primary}
        />
      }
      initialNumToRender={initialNumToRender}
      maxToRenderPerBatch={maxToRenderPerBatch}
      updateCellsBatchingPeriod={2000}
      onEndReachedThreshold={0.25}
      onEndReached={onEndReached}
      renderItem={({ item: post }) => (
        <PostItem onPress={() => goToDetailBy(post.id)} {...post} />
      )}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={Separator}
      ListFooterComponent={ListFooter({
        allDataRendered,
        goToTop,
        showGotoTopButton,
      })}
      ListEmptyComponent={ListEmpty({ loading, hasError, onTryAgain })}
    />
  );
}
