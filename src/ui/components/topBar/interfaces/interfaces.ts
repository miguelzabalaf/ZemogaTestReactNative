import { PageProps } from 'src/ui/containers/layout/interfaces';

export interface TopBarProps {
  lastScreenName?: PageProps['lastScreenName'];
  showGoBack?: PageProps['showGoBack'];
  showBorderBottomOfTopBar?: boolean;
}

export interface TopBarStyleProps {
  showBorderBottomOfTopBar?: TopBarProps['showBorderBottomOfTopBar'];
}
