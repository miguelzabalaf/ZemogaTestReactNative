import React, { PureComponent } from 'react';
import { View, Text, SkeletonView } from 'react-native-ui-lib';
import { postItemStyles } from './styles';
import { Icon } from './../../../ui/icons';
import { Touchable } from './../../containers/touchable';
import { PostItemProps } from './interfaces';

export class PostItem extends PureComponent<PostItemProps> {
  render() {
    const { title, onPress, showContent } = this.props;
    const {
      containerStyle,
      textContainerStyle,
      favoriteIconContainerStyle,
      skeletonStyle,
    } = postItemStyles();
    return (
      <SkeletonView
        template={SkeletonView.templates.TEXT_CONTENT}
        showContent={showContent}
        times={1}
        style={skeletonStyle}
        renderContent={() => (
          <Touchable onPress={onPress}>
            <View style={containerStyle}>
              <View style={textContainerStyle}>
                <Text subTitle>{title}</Text>
              </View>
              <View style={favoriteIconContainerStyle}>
                <Icon.Srta scale={0.5} />
              </View>
            </View>
          </Touchable>
        )}
      />
    );
  }
}
