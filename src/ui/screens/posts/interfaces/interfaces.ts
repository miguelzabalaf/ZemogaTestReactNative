import { NavigationComponentProps } from 'react-native-navigation';
import { PostEntity } from './../../../../domain/entities/post.entity';

export interface UseActionsControllerProps extends NavigationComponentProps {
  editMode: boolean;
}

export interface PostListProps {
  posts: Array<PostEntity>;
  onPressPost: (postId: PostEntity['id']) => void;
  loading: boolean;
  hasError?: boolean;
  onTryAgain: () => void;
  editMode: boolean;
}

export interface OnGetAllPostsProps {
  force?: boolean;
}
