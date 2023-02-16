import React from 'react';
import { Layout } from '../../containers/layout';
import { ScreenProps } from './../../../ui/interfaces/interfaces';
import { PostList } from './../../../ui/components/postList';
import { useActionsController } from './controllers/actions.controller';
import { useDataController } from './controllers/data.controller';
import { Icon } from 'src/ui/icons';
import { Colors, Text, View } from 'react-native-ui-lib';
import { postStyles } from './styles';
import { Touchable } from 'src/ui/containers/touchable';

export function PostsScreen(props: ScreenProps): JSX.Element {
  // Props
  const { componentId, lastScreenName } = props;

  // Styles
  const { containerContentStyle, deteleAllContainerStyles } = postStyles();

  // Controllers
  const {
    // States
    loadingPosts,
    errorToLoadPosts,
    editMode,
    // Data
    posts,
    // Methods
    onTryAgainGetPosts,
    onToggleEditMode,
    // Conditions
    havePostsToDelete,
  } = useDataController();
  const { onPressPost, onDeleteAllPosts } = useActionsController({
    componentId,
    editMode,
  });

  return (
    <Layout.Page
      withoutScroll
      contentWithoutPaddingTop
      lastScreenName={lastScreenName}
      onPressIconRight={() => {
        if (posts.length) {
          onToggleEditMode();
        }
      }}
      IconRight={() => {
        if (havePostsToDelete) {
          return editMode
            ? Icon.Close({ scale: 0.75, color: Colors.gray })
            : Icon.Pen({ scale: 0.75, color: Colors.gray });
        }
        return null;
      }}>
      <View style={containerContentStyle}>
        <PostList
          posts={posts}
          editMode={editMode}
          onPressPost={onPressPost}
          loading={loadingPosts}
          hasError={errorToLoadPosts}
          onTryAgain={onTryAgainGetPosts}
        />
        {editMode && (
          <View backgroundColor={Colors.red80} style={deteleAllContainerStyles}>
            <Touchable
              onPress={() => {
                onDeleteAllPosts(onToggleEditMode);
              }}>
              <Text normal red30>
                Delete all posts
              </Text>
            </Touchable>
          </View>
        )}
      </View>
    </Layout.Page>
  );
}
