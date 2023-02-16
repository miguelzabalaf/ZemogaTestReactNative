import { navigateTo } from '../../../../navigation/helpers/navigation';
import { UseActionsControllerProps } from '../interfaces';
import strings from '../../../../constants/strings';
import { PostEntity } from '../../../../domain/entities/post.entity';
import { Alert } from 'react-native';
import { postActions } from 'src/redux/actions/post.actions';
import { useDispatch } from 'react-redux';
import { actRemovePostByDispatchAction } from 'src/redux/reducers/post/interfaces';
import { actRemoveAllPostsDispatchAction } from 'src/redux/reducers/post/interfaces/interfaces';

export function useActionsController(props: UseActionsControllerProps) {
  // Props
  const { componentId, editMode } = props;

  // Actions
  const dispatch = useDispatch();
  const { actRemovePostBy, actRemoveAllPosts } = postActions();

  function onDeletePost(postId: PostEntity['id']) {
    Alert.alert(
      strings.labels.deletePost,
      strings.labels.areYouSureToDeleteThisPost,
      [
        { style: 'cancel', text: strings.labels.cancel },
        {
          text: strings.labels.delete,
          onPress: () =>
            dispatch<actRemovePostByDispatchAction>(actRemovePostBy(postId)),
        },
      ],
    );
  }

  function onDeleteAllPosts(callback?: () => void) {
    Alert.alert(
      strings.labels.deleteAllPosts,
      strings.labels.areYouSureToDeleteAllPosts,
      [
        { style: 'cancel', text: strings.labels.cancel },
        {
          text: strings.labels.delete,
          onPress: () => {
            dispatch<actRemoveAllPostsDispatchAction>(actRemoveAllPosts());
            callback && callback();
          },
        },
      ],
    );
  }

  function onPressPost(postId: PostEntity['id']) {
    if (editMode) {
      onDeletePost(postId);
    } else {
      navigateTo({
        componentId,
        screenName: strings.screens.postDetail,
        props: { postId },
      });
    }
  }

  return {
    onPressPost,
    onDeleteAllPosts,
  };
}
