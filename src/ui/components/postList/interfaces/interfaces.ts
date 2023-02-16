import { PostEntity } from './../../../../domain/entities/post.entity';

export interface PostItemProps extends Partial<PostEntity> {
  onPress: () => void;
  loading?: boolean;
}

export interface ListEmptyProps {
  loading?: boolean;
  hasError?: boolean;
  onTryAgain: () => void;
}
