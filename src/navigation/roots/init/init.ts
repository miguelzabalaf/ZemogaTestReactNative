import strings from './../../../constants/strings';
import { stackOptions } from './../../../navigation/options/stack';
import { LayoutRoot } from 'react-native-navigation';

export const initRoot: LayoutRoot = {
  root: {
    stack: {
      id: strings.stacks.init,
      children: [
        {
          component: {
            name: strings.screens.splash,
            id: strings.screens.splash,
          },
        },
      ],
      options: stackOptions,
    },
  },
};
