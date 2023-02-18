import { PageProps } from 'src/ui/containers/layout/interfaces';

export interface TopBarProps
  extends Pick<
    PageProps,
    'lastScreenName' | 'showGoBack' | 'IconRight' | 'onPressIconRight'
  > {
  showBorderBottomOfTopBar?: boolean;
}

export interface TopBarStyleProps
  extends Pick<TopBarProps, 'showBorderBottomOfTopBar'> {}
