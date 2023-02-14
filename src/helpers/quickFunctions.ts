import { Platform } from 'react-native';

export function isIOS() {
  return Platform.OS === 'ios';
}

export function capitalizeFirstLetter(str: string = '') {
  return str?.charAt(0).toUpperCase() + str?.slice(1);
}
