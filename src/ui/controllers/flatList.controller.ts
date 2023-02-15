import { useRef, useState } from 'react';
import { FlatListControllerProps } from './interfaces';
import { FlatList } from 'react-native/types';

export function useFlatlistController<T>(props: FlatListControllerProps<T>) {
  // Props
  const { data, usualyHasMoreThan15Items } = props;

  // Constants
  const initialNumToRender = usualyHasMoreThan15Items ? 15 : undefined;
  const maxToRenderPerBatch = usualyHasMoreThan15Items ? 15 : undefined;
  const updateCellsBatchingPeriod = usualyHasMoreThan15Items ? 2000 : undefined;
  const onEndReachedThreshold = usualyHasMoreThan15Items ? 0.25 : undefined;

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
    flatListRef,
    allDataRendered,
    data,
    // Methods
    goToTop,
    onEndReached,
  };
}
