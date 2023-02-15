import React from 'react';
import { Layout } from './../../containers/layout';
import { View, Text, Spacings, Colors } from 'react-native-ui-lib';
import strings from './../../../constants/strings';
import { ButtonIcon } from 'src/ui/components/buttonIcon';
import { postDetailActionsStyles } from './styles';
import { PostDetailActionsProps } from './interfaces';
import { Icon } from 'src/ui/icons';

export function PostDetailActions(props: PostDetailActionsProps): JSX.Element {
  const { user, loading, onPressEmail, onPressPhone, onPressWebsite } = props;
  const { containerStyle } = postDetailActionsStyles();
  return (
    <Layout.ContentWithPaddingHorizontal>
      <Text textMuted smallText>
        {strings.labels.actions}
      </Text>
      <View height={Spacings.s3} />
      <View style={containerStyle}>
        <ButtonIcon
          disabled={!user?.email.length}
          label={strings.labels.email}
          loading={loading}
          Icon={Icon.Email}
          onPress={onPressEmail}
          iconColor={Colors.white}
        />
        <ButtonIcon
          disabled={!user?.website.length}
          label={strings.labels.website}
          loading={loading}
          Icon={Icon.Website}
          onPress={onPressWebsite}
          iconColor={Colors.white}
        />
        <ButtonIcon
          disabled={!user?.phone.length}
          label={strings.labels.call}
          loading={loading}
          Icon={Icon.Phone}
          onPress={onPressPhone}
          iconColor={Colors.white}
        />
      </View>
    </Layout.ContentWithPaddingHorizontal>
  );
}
