import { ContainerProps } from 'src/ui/interfaces/interfaces';

export interface PageProps extends ContainerProps {
  withoutScroll?: boolean;
  contentWithoutPaddingTop?: boolean;
  center?: boolean;
  hideTopBar?: boolean;
  showGoBack?: boolean;
  lastScreenName?: string;
}

export interface PageStylesProps {
  contentWithoutPaddingTop?: PageProps['contentWithoutPaddingTop'];
  center?: PageProps['center'];
}
