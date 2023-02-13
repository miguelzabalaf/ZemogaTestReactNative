import { Layout, LayoutRoot, Navigation } from 'react-native-navigation';
import { NavigateToProps, PopToProps } from '../interfaces';

export function navigateTo({
  screenName,
  componentId,
  props,
  options,
}: NavigateToProps) {
  const configScreen: Layout<{ [key: string]: any }> = {
    component: {
      id: screenName,
      name: screenName,
      passProps: {
        lastScreenName: componentId,
        ...props,
      },
      options,
    },
  };
  if (screenName !== componentId) {
    Navigation.push(componentId, configScreen);
  } else {
    console.info(
      "Info: Your stack can't contain two children with the same id:",
      componentId,
    );
  }
}

export function popTo({ screenName, mergeOptions }: PopToProps) {
  Navigation.popTo(screenName ?? '', mergeOptions);
}

export async function setRoot(root: LayoutRoot) {
  try {
    await Navigation.setRoot(root);
  } catch (error) {
    console.warn('Error [setRoot Function]: ', error);
  }
}
