import React, { PropsWithChildren } from 'react';

type ButtonProps = {
  type: string;
};

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
}) => {
  return <button>{children}</button>;
};
