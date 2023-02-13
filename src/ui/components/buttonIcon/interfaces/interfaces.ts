import { SvgProps } from 'react-native-svg';
import { TouchableProps } from './../../../../ui/containers/touchable/interfaces/interfaces';

export interface ButtonIconProps extends TouchableProps {
  onPress: () => void;
  Icon: React.FC<SvgProps>;
  label: string;
  iconColor?: string;
  color?: string;
}

export interface ButtonStylesProps {
  color?: ButtonIconProps['color'];
}
