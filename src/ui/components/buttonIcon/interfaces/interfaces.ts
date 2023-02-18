import { SvgProps } from 'react-native-svg';
import { TouchableProps } from 'src/ui/containers/touchable/interfaces/interfaces';

export interface ButtonIconProps extends TouchableProps {
  onPress: () => void;
  Icon: React.FC<SvgProps>;
  label: string;
  iconColor?: string;
  color?: string;
  loading?: boolean;
  disabled?: boolean;
}

export interface ButtonStylesProps
  extends Pick<ButtonIconProps, 'color' | 'loading' | 'disabled'> {}
