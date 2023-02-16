import { ScreenProps } from 'src/ui/interfaces';
import { PostEntity } from './../../../../domain/entities/post.entity';
import { UserEntity } from 'src/domain/entities/user.entity';

export interface PostDetailScreenProps extends ScreenProps {
  postId: PostEntity['id'];
}

export interface PostMapProps extends Partial<UserEntity> {
  loading?: boolean;
  hasError?: boolean;
  getInitialRegion: (
    lat: number,
    lon: number,
  ) => {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
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
  hasError?: boolean;
  onPressEmail: (email?: string) => void;
  onPressPhone: (phone?: string) => void;
  onPressWebsite: (website?: string) => void;
}

export interface PostAuthorProps extends Partial<UserEntity> {
  loading?: boolean;
  hasError?: boolean;
}
