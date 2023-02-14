import React from 'react';
import { Layout } from '../../containers/layout';
import {
  Text,
  View,
  Spacings,
  Colors,
  Toast,
  ExpandableSection,
} from 'react-native-ui-lib';
import { PostDetailScreenProps } from './interfaces';
import strings from './../../../constants/strings';
import { Separator } from './../../../ui/components/separator';
import MapView, { Marker } from 'react-native-maps';
import { postDetailStyles } from './styles';
import { ButtonIcon } from './../../../ui/components/buttonIcon';
import { Icon } from './../../../ui/icons';
import { useActionsController } from './controllers/actions.controller';
import { useDataController } from './controllers/data.controller';
import { HeaderExpandableSection } from 'src/ui/components/headerExpandableSection';
import { CommentList } from 'src/ui/components/commentList/commentList';
import { capitalizeFirstLetter } from 'src/helpers/quickFunctions';

export function PostDetailScreen(props: PostDetailScreenProps): JSX.Element {
  const { lastScreenName, postId } = props;
  const { containerMapStyle, mapStyle, containerActionsStyle } =
    postDetailStyles();
  const {
    // States
    toastState,
    showComments,
    // Methods
    onPressEmail,
    onPressPhone,
    onPressWebsite,
    onPressFavorite,
    onDismissToast,
    onPressComments,
  } = useActionsController({ postId });
  const { post, isFavorite, user } = useDataController({ postId });
  return (
    <Layout.Page
      showGoBack
      contentWithoutPaddingTop
      lastScreenName={lastScreenName}
      IconRight={() =>
        Icon.Star({
          scale: 0.75,
          color: isFavorite ? Colors.yellow30 : Colors.gray,
        })
      }
      onPressIconRight={onPressFavorite}>
      <Toast
        visible={toastState.visible}
        position={'top'}
        autoDismiss={1500}
        onDismiss={onDismissToast}
        backgroundColor={toastState.color}
        message={toastState.message}
      />

      <Layout.ContentWithPaddingHorizontal>
        <View height={Spacings.s3} />
        <Text textMuted smallText>
          {strings.labels.post}
        </Text>
        <Text title black>
          {capitalizeFirstLetter(post?.title)}
        </Text>
        <View height={Spacings.s3} />
        <Text text>{capitalizeFirstLetter(post?.body)}</Text>
      </Layout.ContentWithPaddingHorizontal>
      <View height={Spacings.s3} />
      <ExpandableSection
        expanded={showComments}
        onPress={onPressComments}
        sectionHeader={
          <HeaderExpandableSection
            Icon={() => Icon.Comment({ color: Colors.gray, scale: 0.5 })}
            label={strings.labels.comments}
          />
        }>
        <CommentList
          comments={[
            {
              postId: 1,
              id: 2,
              name: 'quo vero reiciendis velit similique earum',
              email: 'Jayne_Kuhic@sydney.com',
              body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
            },
            {
              postId: 1,
              id: 2,
              name: 'quo vero reiciendis velit similique earum',
              email: 'Jayne_Kuhic@sydney.com',
              body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
            },
            {
              postId: 1,
              id: 2,
              name: 'quo vero reiciendis velit similique earum',
              email: 'Jayne_Kuhic@sydney.com',
              body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
            },
          ]}
        />
      </ExpandableSection>
      <View height={Spacings.s3} />
      <Separator />
      <View height={Spacings.s3 * 2} />
      <Layout.ContentWithPaddingHorizontal>
        <Text textMuted smallText>
          {strings.labels.author}
        </Text>
        <Text subTitle>
          {user?.name} · <Text textMuted>{user?.username}</Text>
        </Text>
        <Text text lowercase textMuted>
          {user?.email}
        </Text>
        <View height={Spacings.s3 * 2} />
        <Text textMuted smallText>
          {strings.labels.location}
        </Text>
        <View height={Spacings.s3} />
      </Layout.ContentWithPaddingHorizontal>
      <View style={containerMapStyle}>
        {user && (
          <MapView
            style={mapStyle}
            initialRegion={{
              latitude: parseFloat(user?.address.geo.lat),
              longitude: parseFloat(user?.address.geo.lng),
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}>
            <Marker
              coordinate={{
                latitude: Number(user?.address.geo.lat),
                longitude: Number(user?.address.geo.lng),
              }}
            />
          </MapView>
        )}
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
            onPress={() => onPressEmail(user?.email || '')}
            iconColor={Colors.white}
          />
          <ButtonIcon
            label={strings.labels.website}
            Icon={Icon.Website}
            onPress={() => onPressWebsite(user?.website || '')}
            iconColor={Colors.white}
          />
          <ButtonIcon
            label={strings.labels.call}
            Icon={Icon.Phone}
            onPress={() => onPressPhone(user?.phone || '')}
            iconColor={Colors.white}
          />
        </View>
      </Layout.ContentWithPaddingHorizontal>
    </Layout.Page>
  );
}
