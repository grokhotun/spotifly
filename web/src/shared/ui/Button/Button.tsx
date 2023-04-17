import React, { PropsWithChildren } from 'react';

import { Button as StyledButton } from './styled';

type ButtonProps = {
  type?: 'default' | 'primary' | 'secondary';
};

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  type = 'default',
}) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};
