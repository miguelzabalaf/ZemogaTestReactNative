import React from 'react';
import { Layout } from 'src/ui/containers/layout';
import {
  View,
  Spacings,
  Colors,
  Toast,
  ExpandableSection,
  Text,
} from 'react-native-ui-lib';
import { PostDetailScreenProps } from './interfaces';
import strings from 'src/constants/strings';
import { Separator } from 'src/ui/components/separator';
import { postDetailStyles } from './styles';
import { Icon } from 'src/ui/icons';
import { useActionsController } from './controllers/actions.controller';
import { useDataController } from './controllers/data.controller';
import { HeaderExpandableSection } from 'src/ui/components/headerExpandableSection';
import { PostDetailActions } from 'src/ui/screens/postDetail/postDetailActions';
import { CommentListPreview } from 'src/ui/components/commentList/commentListPreview';
import { PostHero } from 'src/ui/screens/postDetail/postHero';
import { PostAuthor } from 'src/ui/screens/postDetail/postAuthor';
import { PostMap } from 'src/ui/screens/postDetail/postMap';
import { ScrollView } from 'react-native';

export function PostDetailScreen(props: PostDetailScreenProps): JSX.Element {
  // Props
  const { lastScreenName, postId, componentId } = props;

  // Styles
  const { containerContentStyle, contentFooterStyle, toastContainerStyle } =
    postDetailStyles();

  // Controllers
  const {
    post,
    isFavorite,
    user,
    comments,
    loadingComments,
    loadingUserInfo,
    errorToLoadUserInfo,
    errorToLoadComments,
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
    getInitialRegion,
  } = useActionsController({ postId, loadingComments, componentId });
  return (
    <Layout.Page
      showGoBack
      contentWithoutPaddingTop
      lastScreenName={lastScreenName}
      withoutScroll
      IconRight={() =>
        Icon.Star({
          scale: 0.75,
          color: isFavorite ? Colors.yellow30 : Colors.gray,
        })
      }
      onPressIconRight={onPressFavorite}>
      <View style={containerContentStyle}>
        <Toast
          centerMessage
          visible={toastState.visible}
          position={'top'}
          autoDismiss={1500}
          onDismiss={onDismissToast}
          backgroundColor={'transparent'}>
          <View
            paddingV-10
            backgroundColor={toastState.color}
            style={toastContainerStyle}>
            <Text text center white>
              {toastState.message}
            </Text>
          </View>
        </Toast>
        <ScrollView>
          <PostHero {...post} />
          <View height={Spacings.s3} />
          {!errorToLoadComments && (
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
          )}
          <View height={Spacings.s3} />
          <Separator />
          <View height={Spacings.s3 * 2} />
          <PostAuthor
            loading={loadingUserInfo}
            hasError={errorToLoadUserInfo}
            {...user}
          />
          <PostMap
            {...user}
            getInitialRegion={getInitialRegion}
            hasError={errorToLoadUserInfo}
          />
        </ScrollView>
        {!errorToLoadUserInfo && (
          <View style={contentFooterStyle}>
            <PostDetailActions
              user={user}
              loading={loadingUserInfo}
              hasError={errorToLoadUserInfo}
              onPressEmail={() => onPressEmail(user?.email || '')}
              onPressPhone={() => onPressPhone(user?.phone || '')}
              onPressWebsite={() => onPressWebsite(user?.website || '')}
            />
          </View>
        )}
      </View>
    </Layout.Page>
  );
}
