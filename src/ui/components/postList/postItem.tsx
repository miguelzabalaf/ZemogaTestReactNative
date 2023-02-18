import React, { PureComponent } from 'react';
import { View, Text, Colors } from 'react-native-ui-lib';
import { postItemStyles } from './styles';
import { Icon } from 'src/ui/icons';
import { Touchable } from 'src/ui/containers/touchable';
import { PostItemProps } from './interfaces';
import { capitalizeFirstLetter } from 'src/helpers/quickFunctions';
import { Sekeleton } from 'src/ui/components/skeleton';
import { SkeletonSize } from 'src/ui/components/skeleton/interfaces/interfaces';

export class PostItem extends PureComponent<PostItemProps> {
  render() {
    const { title, onPress, isFavorite, loading, editMode } = this.props;
    const { containerStyle, textContainerStyle, favoriteIconContainerStyle } =
      postItemStyles({ isFavorite, editMode });
    return (
      <Touchable
        onPress={() => {
          if (editMode && isFavorite) {
            return;
          }
          onPress();
        }}>
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
            {editMode && !isFavorite && (
              <Icon.Trash scale={0.5} color={Colors.red30} />
            )}
            {loading && (
              <Sekeleton.Text size={SkeletonSize.Medium} width={17} />
            )}
            {!loading && isFavorite && (
              <Icon.Star scale={0.5} color={Colors.yellow30} />
            )}
          </View>
        </View>
      </Touchable>
    );
  }
}
