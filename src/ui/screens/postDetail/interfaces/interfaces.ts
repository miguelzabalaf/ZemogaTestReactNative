import { ScreenProps } from 'src/ui/interfaces';
import { PostEntity } from './../../../../domain/entities/post.entity';
import { UserEntity } from 'src/domain/entities/user.entity';

export interface PostDetailScreenProps extends ScreenProps {
  postId: PostEntity['id'];
}

export interface UseActionsControllerProps extends PostDetailScreenProps {
  postId: PostEntity['id'];
  loadingComments?: boolean;
}

export interface UseDataControllerProps {
  postId: PostEntity['id'];
}

export interface PostDetailActionsProps {
  loading?: boolean;
  user?: UserEntity;
  onPressEmail: (email?: string) => void;
  onPressPhone: (phone?: string) => void;
  onPressWebsite: (website?: string) => void;
}
