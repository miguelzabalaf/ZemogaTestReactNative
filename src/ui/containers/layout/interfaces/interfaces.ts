import { ContainerProps } from 'src/ui/interfaces/interfaces';
import { SvgProps } from 'react-native-svg';

export interface PageProps extends ContainerProps {
  withoutScroll?: boolean;
  contentWithoutPaddingTop?: boolean;
  center?: boolean;
  hideTopBar?: boolean;
  showGoBack?: boolean;
  lastScreenName?: string;
  IconRight?: React.FC<SvgProps> | null;
  onPressIconRight?: () => void;
}

export interface PageStylesProps
  extends Pick<PageProps, 'center' | 'contentWithoutPaddingTop'> {}
