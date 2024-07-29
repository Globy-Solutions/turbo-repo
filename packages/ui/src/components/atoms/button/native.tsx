/**
 * Represent a Pressable Button.
 * @constructor
 * @param {ButtonProps} props
 * @return {JSX.Element} Button
 */

import { Pressable, Text } from 'react-native';
import styles from './styles';

import type { ButtonNativeProps } from './type';

const Button = ({
  children,
  onPress,
  style,
  styleText
}: ButtonNativeProps): JSX.Element => (
  <Pressable onPress={onPress} style={[styles.common, style]}>
    { children && typeof children === 'string' ? <Text style={[styles.text, styleText]}>{children}</Text> : children }
  </Pressable>
);

export default Button;
