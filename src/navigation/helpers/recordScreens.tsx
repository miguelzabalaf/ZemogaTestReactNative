import { Navigation } from 'react-native-navigation';
import { screens } from './../../constants/screens';
import { ReduxStoreWrapper } from './reduxStoreWrapper';

export function recordScreens() {
  for (const screen in screens) {
    if (Object.prototype.hasOwnProperty.call(screens, screen)) {
      const { component, name } = screens[screen];
      Navigation.registerComponent(
        name,
        () => props => ReduxStoreWrapper(component, props),
      );
    }
  }
}
