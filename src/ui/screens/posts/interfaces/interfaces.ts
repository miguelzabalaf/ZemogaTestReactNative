import { NavigationComponentProps } from 'react-native-navigation';
import { PostEntity } from './../../../../domain/entities/post.entity';

export interface UseNavigationControllerProps
  extends NavigationComponentProps {}

export interface PostListProps {
  goToDetailBy: (post: PostEntity) => void;
}
