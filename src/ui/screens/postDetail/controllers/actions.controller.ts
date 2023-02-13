import { useState } from 'react';
import { Linking } from 'react-native';
import strings from './../../../../constants/strings';

export function useActionsController() {
  const [toastState, setToastState] = useState({
    visible: false,
    message: '',
  });
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
    // TODO: Implement
    setToastState({
      visible: true,
      message: strings.labels.hasBeenAddedToFavorites,
    });
  }

  function onDismissToast() {
    setToastState({
      visible: false,
      message: '',
    });
  }

  return {
    // States
    toastState,
    // Actions
    onPressEmail,
    onPressPhone,
    onPressWebsite,
    onPressFavorite,
    onDismissToast,
  };
}
