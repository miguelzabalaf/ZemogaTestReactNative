import React from 'react';
import { Layout } from './../../containers/layout';
import { Icon } from './../../icons';

export function SplashScreen(props: any): JSX.Element {
  const {} = props;
  return (
    <Layout.Page withoutScroll center>
      <Icon.ZemogaLogo scale={2} />
    </Layout.Page>
  );
}
