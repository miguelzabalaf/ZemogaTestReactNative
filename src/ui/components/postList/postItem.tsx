import React, { PureComponent } from 'react';
import { View, Text, Colors } from 'react-native-ui-lib';
import { postItemStyles } from './styles';
import { Icon } from './../../../ui/icons';
import { Touchable } from './../../containers/touchable';
import { PostItemProps } from './interfaces';
import { capitalizeFirstLetter } from 'src/helpers/quickFunctions';
import { Sekeleton } from '../skeleton';
import { SkeletonSize } from 'src/ui/components/skeleton/interfaces/interfaces';

export class PostItem extends PureComponent<PostItemProps> {
  render() {
    const { title, onPress, isFavoritePost, loading } = this.props;
    const { containerStyle, textContainerStyle, favoriteIconContainerStyle } =
      postItemStyles();
    return (
      <Touchable onPress={onPress}>
        <View style={containerStyle}>
          <View style={textContainerStyle}>
            {loading ? (
              <>
                <Sekeleton.Text size={SkeletonSize.Medium} width={'100%'} />
                <Sekeleton.Text
                  size={SkeletonSize.Medium}
                  width={`${Math.floor(Math.random() * 71) + 30}%`}
                />
              </>
            ) : (
              <Text subTitle>{capitalizeFirstLetter(title)}</Text>
            )}
          </View>
          <View style={favoriteIconContainerStyle}>
            {loading && (
              <Sekeleton.Text size={SkeletonSize.Medium} width={17} />
            )}
            {!loading && isFavoritePost && (
              <Icon.Star scale={0.5} color={Colors.yellow30} />
            )}
          </View>
        </View>
      </Touchable>
    );
  }
}
