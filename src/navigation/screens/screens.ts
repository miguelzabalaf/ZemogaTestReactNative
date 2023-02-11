import { SplashScreen } from '../../ui/screens/splash';
import { PostsScreen } from '../../ui/screens/posts';
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
};
