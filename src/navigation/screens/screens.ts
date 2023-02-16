import { SplashScreen } from '../../ui/screens/splash';
import { PostsScreen } from '../../ui/screens/posts';
import { PostDetailScreen } from '../../ui/screens/postDetail';
import { CommentsScreen } from '../../ui/screens/comments';
import { Screen } from '../interfaces';
import strings from '../../constants/strings';

export const screens: Screen = {
  splash: {
    component: SplashScreen,
    name: strings.screens.splash,
  },
  posts: {
    component: PostsScreen,
    name: strings.screens.posts,
  },
  postDetail: {
    component: PostDetailScreen,
    name: strings.screens.postDetail,
  },
  comments: {
    component: CommentsScreen,
    name: strings.screens.comments,
  },
};
