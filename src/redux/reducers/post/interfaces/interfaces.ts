import { PostEntity } from 'src/domain/entities/post.entity';

export interface PostReducer {
  posts: Array<PostEntity>;
  favoritePosts: Array<PostEntity['id']>;
}

export interface AddAllPostDispatchAction {
  type: string;
  payload: Array<PostEntity>;
}

export interface AddPostIdToFavoritesDispatchAction {
  type: string;
  payload: PostEntity['id'];
}
