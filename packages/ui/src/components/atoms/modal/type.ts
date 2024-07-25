import type {ViewProps} from 'react-native';

export type ModalProps = {
  children: JSX.Element | JSX.Element[];
  show?: boolean;
  style?: ViewProps;
  onClose?: () => void;
  onShow?: () => void;
};
