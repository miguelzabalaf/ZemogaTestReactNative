import React from 'react';
import { View } from 'react-native-ui-lib';
import { PostItem } from './postItem';
import { ItemSeparator } from './itemSeparator';

export function ListEmpty(): JSX.Element {
  return (
    <View>
      {Array.from({ length: 15 }).map((_, index) => (
        <View key={index}>
          <PostItem showContent={false} onPress={() => {}} />
          <ItemSeparator />
        </View>
      ))}
    </View>
  );
}
