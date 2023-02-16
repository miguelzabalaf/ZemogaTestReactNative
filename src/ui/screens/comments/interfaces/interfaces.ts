import { ScreenProps } from 'src/ui/interfaces';
import { CommentEntity } from 'src/domain/entities/comment.entity';

export interface CommentsProps extends ScreenProps {
  comments: Array<CommentEntity>;
}
