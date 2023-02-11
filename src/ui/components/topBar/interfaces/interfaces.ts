import { PageProps } from 'src/ui/containers/layout/interfaces';

export interface TopBarProps {
  lastScreenName?: PageProps['lastScreenName'];
  showGoBack?: PageProps['showGoBack'];
  hideBorderBottomOfTopBar?: boolean;
}

export interface TopBarStyleProps {
  hideBorderBottomOfTopBar?: TopBarProps['hideBorderBottomOfTopBar'];
}
