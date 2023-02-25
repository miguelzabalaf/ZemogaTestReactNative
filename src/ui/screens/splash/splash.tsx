import React from 'react';
import { Layout } from 'src/ui/containers/layout';
import { Icon } from 'src/ui/icons';
import { ScreenProps } from 'src/ui/interfaces/interfaces';
import { useNavigationController } from './controllers/useNavigation.controller';

export function SplashScreen(props: ScreenProps): JSX.Element {
  const {} = props;
  useNavigationController();
  return (
    <Layout.Page withoutScroll hideTopBar center>
      <Icon.ZemogaLogo scale={2} />
    </Layout.Page>
  );
}
