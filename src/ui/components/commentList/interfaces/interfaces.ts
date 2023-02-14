import { CommentEntity } from 'src/domain/entities/comment.entity';

export interface CommentListProps {
  comments: Array<CommentEntity>;
}
