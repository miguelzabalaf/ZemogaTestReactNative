import { useRef, useState } from 'react';
import { FlatListControllerProps } from './interfaces';
import { FlatList } from 'react-native/';

export function useFlatlistController<T>(props: FlatListControllerProps<T>) {
  // Props
  const { data, usualyHasMoreThan15Items } = props;

  // Constants
  const initialNumToRender = usualyHasMoreThan15Items ? 15 : undefined;
  const maxToRenderPerBatch = usualyHasMoreThan15Items ? 15 : undefined;
  const updateCellsBatchingPeriod = usualyHasMoreThan15Items ? 2000 : undefined;
  const onEndReachedThreshold = usualyHasMoreThan15Items ? 0.25 : undefined;
  const showGotoTopButton = usualyHasMoreThan15Items ? true : false;

  // States
  const [allDataRendered, setAllDataRendered] = useState(false);
  const flatListRef = useRef<FlatList<T>>(null);

  // Methods
  function onEndReached() {
    setAllDataRendered(true);
  }

  function goToTop() {
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
  }

  return {
    // Constants
    initialNumToRender,
    maxToRenderPerBatch,
    updateCellsBatchingPeriod,
    onEndReachedThreshold,
    // States
    data,
    flatListRef,
    allDataRendered,
    showGotoTopButton,
    // Methods
    goToTop,
    onEndReached,
  };
}
