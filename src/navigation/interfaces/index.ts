import { Options } from 'react-native-navigation';
import { ScreenProps } from 'src/ui/interfaces';

export interface ScreenComponentProps extends ScreenProps {
  [x: string]: unknown;
}
export interface Screen {
  [key: string]: {
    component: (props: any) => JSX.Element;
    name: string;
  };
}

export interface NavigateToProps {
  screenName: string;
  componentId: string;
  props?: { [key: string]: any };
  options?: Options;
}

export interface PopToProps {
  screenName?: string;
  mergeOptions?: Options;
}
