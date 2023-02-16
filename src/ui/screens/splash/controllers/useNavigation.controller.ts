import { setRoot } from '../../../../navigation/helpers/navigation';
import { postsRoot } from '../../../../navigation/roots/posts/posts';

export function useNavigationController() {
  function handleAfterTimeout() {
    setRoot(postsRoot);
    clearTimeout(myTimeout);
  }
  const myTimeout = setTimeout(() => {
    handleAfterTimeout();
  }, 1500);
}
