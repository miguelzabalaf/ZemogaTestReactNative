import React from 'react';
import { Layout } from 'src/ui/containers/layout';
import { View, Colors } from 'react-native-ui-lib';
import strings from 'src/constants/strings';
import { ButtonIcon } from 'src/ui/components/buttonIcon';
import { postDetailActionsStyles } from './styles';
import { PostDetailActionsProps } from './interfaces';
import { Icon } from 'src/ui/icons';
import { Separator } from 'src/ui/components/separator';

export function PostDetailActions(props: PostDetailActionsProps): JSX.Element {
  const {
    user,
    loading,
    onPressEmail,
    onPressPhone,
    onPressWebsite,
    hasError,
  } = props;
  const { containerStyle } = postDetailActionsStyles();
  return (
    <>
      <Separator />
      <Layout.ContentWithPaddingHorizontal>
        <View style={containerStyle}>
          <ButtonIcon
            disabled={!user?.email.length || hasError}
            label={strings.labels.email}
            loading={loading}
            Icon={Icon.Email}
            onPress={onPressEmail}
            iconColor={Colors.white}
          />
          <ButtonIcon
            disabled={!user?.website.length || hasError}
            label={strings.labels.website}
            loading={loading}
            Icon={Icon.Website}
            onPress={onPressWebsite}
            iconColor={Colors.white}
          />
          <ButtonIcon
            disabled={!user?.phone.length || hasError}
            label={strings.labels.call}
            loading={loading}
            Icon={Icon.Phone}
            onPress={onPressPhone}
            iconColor={Colors.white}
          />
        </View>
      </Layout.ContentWithPaddingHorizontal>
    </>
  );
}
