import { SvgProps } from 'react-native-svg';

export interface HeaderExpandableSectionProps {
  Icon: React.FC<SvgProps>;
  label?: string;
  loading?: boolean;
}
