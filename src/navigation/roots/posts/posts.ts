import strings from '../../../constants/strings';
import { stackOptions } from '../../options/stack';
import { LayoutRoot } from 'react-native-navigation';

export const postsRoot: LayoutRoot = {
  root: {
    stack: {
      id: strings.stacks.posts,
      children: [
        {
          component: {
            name: strings.screens.posts,
            id: strings.screens.posts,
          },
        },
      ],
      options: stackOptions,
    },
  },
};
