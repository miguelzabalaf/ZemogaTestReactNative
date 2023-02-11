import React from 'react';
import { Layout } from './../../containers/layout';
import { Icon } from './../../icons';
import { ScreenPorps } from 'src/ui/interfaces/interfaces';
import { useSplashController } from './controllers/useSplash.controller';

export function SplashScreen(props: ScreenPorps): JSX.Element {
  const {} = props;
  useSplashController();
  return (
    <Layout.Page withoutScroll hideTopBar center>
      <Icon.ZemogaLogo scale={2} />
    </Layout.Page>
  );
}
