import { ContainerProps } from 'src/ui/interfaces/interfaces';
import { TopBarProps } from './../../../../ui/components/topBar/interfaces/interfaces';

export interface PageProps extends ContainerProps {
  withoutScroll?: boolean;
  contentWithoutPaddingTop?: boolean;
  center?: boolean;
  hideTopBar?: boolean;
  showGoBack?: boolean;
  lastScreenName?: string;
  IconRight?: TopBarProps['IconRight'];
  onPressIconRight?: TopBarProps['onPressIconRight'];
}

export interface PageStylesProps {
  contentWithoutPaddingTop?: PageProps['contentWithoutPaddingTop'];
  center?: PageProps['center'];
}
