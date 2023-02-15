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
import { Icon } from './../../../ui/icons';
import { useActionsController } from './controllers/actions.controller';
import { useDataController } from './controllers/data.controller';
import { HeaderExpandableSection } from 'src/ui/components/headerExpandableSection';
import { capitalizeFirstLetter } from 'src/helpers/quickFunctions';
import { PostDetailActions } from 'src/ui/screens/postDetail/postDetailActions';
import { CommentListPreview } from 'src/ui/components/commentList/commentListPreview';

export function PostDetailScreen(props: PostDetailScreenProps): JSX.Element {
  const { lastScreenName, postId, componentId } = props;
  const { containerMapStyle, mapStyle } = postDetailStyles();
  const {
    post,
    isFavoritePost,
    user,
    comments,
    loadingComments,
    loadingUserInfo,
  } = useDataController({ postId });
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
    onPressSeeAll,
  } = useActionsController({ postId, loadingComments, componentId });
  return (
    <Layout.Page
      showGoBack
      contentWithoutPaddingTop
      lastScreenName={lastScreenName}
      IconRight={() =>
        Icon.Star({
          scale: 0.75,
          color: isFavoritePost ? Colors.yellow30 : Colors.gray,
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
            loading={loadingComments}
            Icon={() => Icon.Comment({ color: Colors.gray, scale: 0.5 })}
            label={strings.labels.comments}
          />
        }>
        <CommentListPreview
          comments={comments.slice(0, 2)}
          onPressSeeAll={() => onPressSeeAll(comments)}
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
      <View height={Spacings.s3 * 2} />
      <PostDetailActions
        user={user}
        loading={loadingUserInfo}
        onPressEmail={() => onPressEmail(user?.email || '')}
        onPressPhone={() => onPressPhone(user?.phone || '')}
        onPressWebsite={() => onPressWebsite(user?.website || '')}
      />
    </Layout.Page>
  );
}
