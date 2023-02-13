import React from 'react';
import { View } from 'react-native-ui-lib';
import { PostItem } from './postItem';
import { Separator } from './../separator';

export function ListEmpty(): JSX.Element {
  return (
    <View>
      {Array.from({ length: 15 }).map((_, index) => (
        <View key={index}>
          <PostItem showContent={false} onPress={() => {}} />
          <Separator />
        </View>
      ))}
    </View>
  );
}
