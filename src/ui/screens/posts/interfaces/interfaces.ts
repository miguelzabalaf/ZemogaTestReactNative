import { NavigationComponentProps } from 'react-native-navigation';
import { PostEntity } from './../../../../domain/entities/post.entity';

export interface UseNavigationControllerProps
  extends NavigationComponentProps {}

export interface PostListProps {
  posts: Array<PostEntity>;
  goToDetailBy: (postId: PostEntity['id']) => void;
  loading: boolean;
  hasError?: boolean;
  onTryAgain: () => void;
}

export interface OnGetAllPostsProps {
  force?: boolean;
}
