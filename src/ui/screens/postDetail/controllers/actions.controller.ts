import { useState } from 'react';
import { Linking } from 'react-native';
import strings from './../../../../constants/strings';
import { postActions } from 'src/redux/actions/post.actions';
import { useDispatch } from 'react-redux';
import { AddPostIdToFavoritesDispatchAction } from 'src/redux/reducers/post/interfaces';
import { UseActionsControllerProps } from '../interfaces';
import { getAllFavoritePostelector } from 'src/redux/selectors/post.selector';
import { Colors } from 'react-native-ui-lib';
import { CommentEntity } from 'src/domain/entities/comment.entity';
import { formatNumber } from 'src/helpers/quickFunctions';
import { Navigation } from 'react-native-navigation';
import { getCommentsModal } from 'src/navigation/modals/comments';

export function useActionsController(props: UseActionsControllerProps) {
  // Props
  const { postId, loadingComments } = props;

  // States
  const [showComments, setShowComments] = useState(false);
  const [toastState, setToastState] = useState({
    visible: false,
    color: Colors.primary,
    message: '',
  });

  // Actions
  const dispatch = useDispatch();
  const { actAddPostIdToFavorites } = postActions();

  // Selectors
  const postFavorites = getAllFavoritePostelector();

  // Constants
  const isFavorite = postFavorites?.includes(postId);

  // Methods
  function onPressComments() {
    if (!loadingComments) {
      setShowComments(!showComments);
    }
  }

  function onPressSeeAll(comments: Array<CommentEntity>) {
    Navigation.showModal(getCommentsModal({ comments }));
  }

  async function onPressEmail(email: string) {
    await Linking.openURL(`mailto:${email.toLowerCase()}`);
  }

  async function onPressPhone(phone: string) {
    await Linking.openURL(`tel:${formatNumber(phone)}`);
  }

  async function onPressWebsite(website: string) {
    await Linking.openURL(`https://${website}`);
  }

  function onPressFavorite() {
    dispatch<AddPostIdToFavoritesDispatchAction>(
      actAddPostIdToFavorites(postId),
    );
    setToastState({
      visible: true,
      color: isFavorite ? Colors.red30 : Colors.primary,
      message: isFavorite
        ? strings.labels.hasBeenRemovedFromFavorites
        : strings.labels.hasBeenAddedToFavorites,
    });
  }

  function onDismissToast() {
    setToastState({
      ...toastState,
      visible: false,
    });
  }

  function getInitialRegion(lat: number, lng: number) {
    return {
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
  }

  return {
    // States
    toastState,
    showComments,
    // Methods
    onPressEmail,
    onPressPhone,
    onPressWebsite,
    onPressFavorite,
    onDismissToast,
    onPressComments,
    onPressSeeAll,
    getInitialRegion,
  };
}
