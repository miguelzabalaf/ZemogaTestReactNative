import { CommentEntity } from 'src/domain/entities/comment.entity';

export interface CommentListProps {
  comments: Array<CommentEntity>;
}
export interface CommentListPreviewProps extends CommentListProps {
  onPressSeeAll: () => void;
}
