import { PostEntity } from 'src/domain/entities/post.entity';

export interface PostItemProps extends Partial<PostEntity> {
  onPress: () => void;
  loading?: boolean;
  editMode: boolean;
}

export interface ListEmptyProps {
  loading?: boolean;
  hasError?: boolean;
  onTryAgain: () => void;
}

export interface PostItemStylesProps {
  isFavorite?: boolean;
  editMode: boolean;
}
