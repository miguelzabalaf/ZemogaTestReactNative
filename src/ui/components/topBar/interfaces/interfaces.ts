import { SvgProps } from 'react-native-svg';
import { PageProps } from 'src/ui/containers/layout/interfaces';

export interface TopBarProps {
  lastScreenName?: PageProps['lastScreenName'];
  showGoBack?: PageProps['showGoBack'];
  showBorderBottomOfTopBar?: boolean;
  IconRight?: React.FC<SvgProps>;
  onPressIconRight?: () => void;
}

export interface TopBarStyleProps {
  showBorderBottomOfTopBar?: TopBarProps['showBorderBottomOfTopBar'];
}
