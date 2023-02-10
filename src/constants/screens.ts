import { SplashScreen } from './../screens/splash';
import { Screen } from '../navigation/interfaces';
import strings from './strings';

export const screens: Screen = {
  splash: {
    component: SplashScreen,
    name: strings.screens.splash,
  },
};
