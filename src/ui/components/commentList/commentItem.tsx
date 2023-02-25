import React, { PureComponent } from 'react';
import { Text, View, Spacings } from 'react-native-ui-lib';
import { CommentEntity } from 'src/domain/entities/comment.entity';
import { Layout } from 'src/ui/containers/layout';
import { commentItemStyles } from './styles';
import { capitalizeFirstLetter } from 'src/helpers/quickFunctions';
import { Separator } from 'src/ui/components/separator';

export class CommentItem extends PureComponent<CommentEntity> {
  render() {
    const { name, email, body } = this.props;
    const {
      containerStyle,
      containerLeft,
      badgestyle,
      badgeTextStyle,
      perfilHeaderStyle,
      perfilNameStyle,
      perfilEmailStyle,
      bodyStyle,
    } = commentItemStyles();
    return (
      <Layout.ContentWithPaddingHorizontal>
        <View style={containerStyle}>
          <View style={containerLeft}>
            <View style={badgestyle}>
              <Text style={badgeTextStyle}>{name.slice(0, 1)}</Text>
            </View>
          </View>
          <View style={perfilHeaderStyle}>
            <Text style={perfilNameStyle}>{capitalizeFirstLetter(name)}</Text>
            <Text style={perfilEmailStyle}>{email}</Text>
            <View height={Spacings.s1} />
            <Text style={bodyStyle}>{capitalizeFirstLetter(body)}</Text>
            <View height={Spacings.s3} />
            <Separator />
            <View height={Spacings.s3} />
          </View>
        </View>
      </Layout.ContentWithPaddingHorizontal>
    );
  }
}
