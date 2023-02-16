import { Platform } from 'react-native';

export function isIOS() {
  return Platform.OS === 'ios';
}

export function capitalizeFirstLetter(str: string = '') {
  return str?.charAt(0).toUpperCase() + str?.slice(1);
}

// Thx StackOverflow :)
export function formatNumber(texto: string) {
  const numerosEncontrados = texto.match(/\d+/g);
  if (numerosEncontrados) {
    return numerosEncontrados.join('');
  } else {
    return '';
  }
}
