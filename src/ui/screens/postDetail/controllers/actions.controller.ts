import { useState } from 'react';
import { Linking } from 'react-native';
import strings from './../../../../constants/strings';
import { postActions } from 'src/redux/actions/post.actions';
import { useDispatch } from 'react-redux';
import { AddPostIdToFavoritesDispatchAction } from 'src/redux/reducers/post/interfaces';
import { useActionsControllerProps } from '../interfaces';
import { getAllFavoritePostelector } from 'src/redux/selectors/post.selector';
import { Colors } from 'react-native-ui-lib';

export function useActionsController(props: useActionsControllerProps) {
  // Props
  const { postId } = props;

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
    setShowComments(!showComments);
  }

  function onPressEmail(email: string) {
    Linking.openURL(`mailto:${email}`);
  }

  function onPressPhone(phone: string) {
    Linking.openURL(`tel:${phone}`);
  }

  function onPressWebsite(website: string) {
    Linking.openURL(website);
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
  };
}
