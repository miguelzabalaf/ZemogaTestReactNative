import { useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native/types';
import { isIOS } from './../../../helpers/quickFunctions';

export function usePageController() {
  const [offsetY, setOffsetY] = useState(0);

  function handleOnScrollContent(
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) {
    const contentOffsetY = event.nativeEvent.contentOffset.y;
    setOffsetY(contentOffsetY);
  }

  const hideBorderBottomOfTopBar = offsetY > 0 && isIOS();

  return {
    hideBorderBottomOfTopBar,
    handleOnScrollContent,
  };
}
