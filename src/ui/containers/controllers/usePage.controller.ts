import { useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native/types';

export function usePageController() {
  const [offsetY, setOffsetY] = useState(0);

  function handleOnScrollContent(
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) {
    const contentOffsetY = event.nativeEvent.contentOffset.y;
    setOffsetY(contentOffsetY);
  }

  const showBorderBottomOfTopBar = offsetY > 0;

  return {
    showBorderBottomOfTopBar,
    handleOnScrollContent,
  };
}
