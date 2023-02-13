import React from 'react';
import { Layout } from '../../containers/layout';
import { Text, View, Spacings, Colors } from 'react-native-ui-lib';
import { PostDetailScreenProps } from './interfaces';
import strings from './../../../constants/strings';
import { Separator } from './../../../ui/components/separator';
import MapView, { Marker } from 'react-native-maps';
import { postDetailStyles } from './styles';
import { ButtonIcon } from './../../../ui/components/buttonIcon';
import { Icon } from './../../../ui/icons';

export function PostDetailScreen(props: PostDetailScreenProps): JSX.Element {
  const { lastScreenName, title, body } = props;
  const { containerMapStyle, mapStyle, containerActionsStyle } =
    postDetailStyles();
  return (
    <Layout.Page showGoBack lastScreenName={lastScreenName}>
      <Layout.ContentWithPaddingHorizontal>
        <Text textMuted smallText>
          {strings.labels.post}
        </Text>
        <Text title black>
          {title}
        </Text>
        <View height={Spacings.s3} />
        <Text text>{body}</Text>
      </Layout.ContentWithPaddingHorizontal>
      <View height={Spacings.s3 * 2} />
      <Separator />
      <View height={Spacings.s3 * 2} />
      <Layout.ContentWithPaddingHorizontal>
        <Text textMuted smallText>
          {strings.labels.author}
        </Text>
        <Text subTitle>
          Leanne Graham · <Text textMuted>Bret</Text>
        </Text>
        <Text text lowercase textMuted>
          Sincere@april.biz
        </Text>
        <View height={Spacings.s3 * 2} />
        <Text textMuted smallText>
          {strings.labels.location}
        </Text>
        <View height={Spacings.s3} />
      </Layout.ContentWithPaddingHorizontal>
      <View style={containerMapStyle}>
        <MapView
          style={mapStyle}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}>
          <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
        </MapView>
      </View>
      <Layout.ContentWithPaddingHorizontal>
        <View height={Spacings.s3 * 2} />
        <Text textMuted smallText>
          {strings.labels.actions}
        </Text>
        <View height={Spacings.s3} />
        <View style={containerActionsStyle}>
          <ButtonIcon
            label={strings.labels.email}
            Icon={Icon.Email}
            onPress={() => {}}
            iconColor={Colors.white}
          />
          <ButtonIcon
            label={strings.labels.website}
            Icon={Icon.Website}
            onPress={() => {}}
            iconColor={Colors.white}
          />
          <ButtonIcon
            label={strings.labels.call}
            Icon={Icon.Phone}
            onPress={() => {}}
            iconColor={Colors.white}
          />
        </View>
      </Layout.ContentWithPaddingHorizontal>
    </Layout.Page>
  );
}
