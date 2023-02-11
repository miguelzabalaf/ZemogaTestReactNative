import { PropsWithChildren } from 'react';
import { NavigationComponentProps } from 'react-native-navigation';

export interface ScreenPorps extends NavigationComponentProps {
  lastScreenName?: string;
}

export interface ContainerProps extends PropsWithChildren {}
