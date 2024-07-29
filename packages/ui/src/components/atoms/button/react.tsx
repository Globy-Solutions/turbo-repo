/**
 * Represent a Pressable Button.
 * @constructor
 * @param {ButtonProps} props
 * @return {JSX.Element} Button
 */

import type { ButtonReactProps } from './type';

const Button = ({
  children,
  type = 'button',
  ...props
}: ButtonReactProps): JSX.Element => (
  <button type={type} {...props}>
    {children}
  </button>
);

export default Button;
