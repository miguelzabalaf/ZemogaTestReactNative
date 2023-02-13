import { navigateTo } from './../../../../navigation/helpers/navigation';
import { UseNavigationControllerProps } from '../interfaces';
import strings from './../../../../constants/strings';
import { PostEntity } from './../../../../domain/entities/post.entity';

export function useNavigationController(props: UseNavigationControllerProps) {
  const { componentId } = props;

  function goToDetailBy(postId: PostEntity['id']) {
    navigateTo({
      componentId,
      screenName: strings.screens.postDetail,
      props: { postId },
    });
  }

  return {
    goToDetailBy,
  };
}
