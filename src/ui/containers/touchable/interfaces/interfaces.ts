import { TouchableWithoutFeedbackProps } from 'react-native/types';
import { ContainerProps } from 'src/ui/interfaces/interfaces';

export interface TouchableProps
  extends ContainerProps,
    TouchableWithoutFeedbackProps {}
