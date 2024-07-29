import type { ButtonHTMLAttributes } from 'react';
import type { PressableProps } from 'react-native/Libraries/Components/Pressable/Pressable';

export type ButtonReactProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void
}

export type ButtonNativeProps = PressableProps & {
  onPress?: () => void
}

export type ButtonProps = ButtonReactProps | ButtonNativeProps