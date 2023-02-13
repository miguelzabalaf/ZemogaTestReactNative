import { ScreenPorps } from 'src/ui/interfaces';
import { PostEntity } from './../../../../domain/entities/post.entity';

export interface PostDetailScreenProps extends ScreenPorps {
  postId: PostEntity['id'];
}

export interface useActionsControllerProps {
  postId: PostEntity['id'];
}

export interface useDataControllerProps {
  postId: PostEntity['id'];
}
