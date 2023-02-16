import { Navigation } from 'react-native-navigation';
import { recordScreens } from './src/navigation/helpers/recordScreens';
import { initRoot } from './src/navigation/roots/init';
import { presetStyles } from './src/ui/helpers/presetStyles';
import { enableLatestRenderer } from 'react-native-maps';

enableLatestRenderer();
recordScreens();
presetStyles();
const startAPP = () => {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot(initRoot);
  });
};

startAPP();
