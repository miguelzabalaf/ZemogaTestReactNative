import React from 'react';
import { Layout } from 'src/ui/containers/layout';
import { ScreenProps } from 'src/ui/interfaces/interfaces';
import { PostList } from 'src/ui/components/postList';
import { useActionsController } from './controllers/actions.controller';
import { useDataController } from './controllers/data.controller';
import { Colors, Text, View } from 'react-native-ui-lib';
import { postStyles } from './styles';
import { Touchable } from 'src/ui/containers/touchable';
import strings from 'src/constants/strings';

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
    // Icons
    IconRight,
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
      onPressIconRight={onToggleEditMode}
      IconRight={IconRight}>
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
              <Text text red30>
                {strings.labels.deleteAllPosts}
              </Text>
            </Touchable>
          </View>
        )}
      </View>
    </Layout.Page>
  );
}
