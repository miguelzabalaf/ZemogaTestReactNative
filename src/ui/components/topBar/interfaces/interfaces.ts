import { PageProps } from 'src/ui/containers/layout/interfaces';

export interface TopBarProps
  extends Pick<
    PageProps,
    | 'lastScreenName'
    | 'showGoBack'
    | 'IconRight'
    | 'onPressIconRight'
    | 'isModal'
    | 'title'
  > {
  showBorderBottomOfTopBar?: boolean;
}

export interface TopBarStyleProps
  extends Pick<TopBarProps, 'showBorderBottomOfTopBar'> {}
