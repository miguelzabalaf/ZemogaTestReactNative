import { PostEntity } from './../../../../domain/entities/post.entity';

export interface PostItemProps extends Partial<PostEntity> {
  onPress: () => void;
  showContent: boolean;
}
