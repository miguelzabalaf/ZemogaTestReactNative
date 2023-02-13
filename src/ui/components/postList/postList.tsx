import React, { useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { PostEntity } from 'src/domain/entities/post.entity';
import { PostItem } from './postItem';
import { Separator } from './../../components/separator';
import { ListFooter } from './listFooter';
import { ListEmpty } from './listEmpty';
import { PostListProps } from 'src/ui/screens/posts/interfaces';

export function PostList(props: PostListProps): JSX.Element {
  const { posts, goToDetailBy } = props;
  const numberToRender = 15;
  const [renderAllData, setRenderAllData] = useState(false);
  const postListRef = useRef<FlatList<PostEntity>>(null);

  function onEndReached() {
    setRenderAllData(true);
  }

  function goToTop() {
    postListRef.current?.scrollToIndex({ index: 0, animated: true });
  }

  return (
    <FlatList
      ref={postListRef}
      data={posts}
      initialNumToRender={numberToRender}
      maxToRenderPerBatch={numberToRender}
      updateCellsBatchingPeriod={2000}
      onEndReachedThreshold={0.25}
      onEndReached={onEndReached}
      renderItem={({ item: post }) => (
        <PostItem showContent onPress={() => goToDetailBy(post.id)} {...post} />
      )}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={Separator}
      ListFooterComponent={ListFooter({
        renderAllData,
        goToTop,
      })}
      ListEmptyComponent={ListEmpty}
    />
  );
}
