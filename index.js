import { Navigation } from 'react-native-navigation';
import { recordScreens } from './src/navigation/helpers/recordScreens';
import { initRoot } from './src/navigation/roots/init';

recordScreens();
const startAPP = () => {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot(initRoot);
  });
};

startAPP();
