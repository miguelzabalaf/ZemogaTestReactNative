import { Layout } from 'react-native-navigation';
import strings from 'src/constants/strings';
import { stackOptions } from 'src/navigation/options/stack';
import { CommentListProps } from 'src/ui/components/commentList/interfaces';

export function getCommentsModal(props: CommentListProps): Layout {
  return {
    stack: {
      id: strings.stacks.comments,
      children: [
        {
          component: {
            name: strings.screens.comments,
            id: strings.screens.comments,
            passProps: {
              isModal: true,
              title: strings.screens.comments,
              ...props,
            },
          },
        },
      ],
      options: stackOptions,
    },
  };
}
