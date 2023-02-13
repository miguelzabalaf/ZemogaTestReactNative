import { ScreenPorps } from 'src/ui/interfaces';
import { PostEntity } from './../../../../domain/entities/post.entity';

export interface PostDetailScreenProps extends ScreenPorps, PostEntity {}
