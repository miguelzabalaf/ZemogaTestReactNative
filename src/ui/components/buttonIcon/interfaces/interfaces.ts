import { SvgProps } from 'react-native-svg';
import { TouchableProps } from './../../../../ui/containers/touchable/interfaces/interfaces';

export interface ButtonIconProps extends TouchableProps {
  onPress: () => void;
  Icon: React.FC<SvgProps>;
  label: string;
  iconColor?: string;
  color?: string;
  loading?: boolean;
  disabled?: boolean;
}

export interface ButtonStylesProps {
  color?: ButtonIconProps['color'];
  loading?: ButtonIconProps['loading'];
  disabled?: ButtonIconProps['disabled'];
}
