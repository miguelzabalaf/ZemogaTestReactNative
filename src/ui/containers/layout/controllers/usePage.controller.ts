import { useEffect, useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native/types';
import NetInfo from '@react-native-community/netinfo';

export function usePageController() {
  const [offsetY, setOffsetY] = useState(0);
  const [isUserConnected, setIsUserConnected] = useState<boolean | null>(true);

  function handleOnScrollContent(
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) {
    const contentOffsetY = event.nativeEvent.contentOffset.y;
    setOffsetY(contentOffsetY);
  }

  const showBorderBottomOfTopBar = offsetY > 0;

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsUserConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    showBorderBottomOfTopBar,
    handleOnScrollContent,
    isUserConnected,
  };
}
