import { navigateTo } from './../../../../navigation/helpers/navigation';
import { UseNavigationControllerProps } from '../interfaces';
import strings from './../../../../constants/strings';
import { PostEntity } from './../../../../domain/entities/post.entity';

export function useNavigationController(props: UseNavigationControllerProps) {
  const { componentId } = props;

  function goToDetailBy(post: PostEntity) {
    navigateTo({
      componentId,
      screenName: strings.screens.postDetail,
      props: { ...post },
    });
  }

  return {
    goToDetailBy,
  };
}
